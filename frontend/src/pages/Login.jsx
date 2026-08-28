import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css"

console.log("Testing log in");


function Login(){
	
	//registration info
	const [register, setRegister] = useState(false);
	const [username, setUsername] = useState("");
	const [pw, setPW] = useState("");
	const [confirmPW, setConfirmPW] = useState("");
	const [email, setEmail] = useState("");
	const [dob, setDOB] = useState("");
	//finding if user exists
	const [exists, setExists] = useState(false);

	//verifiers
	const [email_v, setEmail_v] = useState(false);
	const [confirm_v, setConfirm_v] = useState(false);
	const [dob_v, setDOB_v] = useState(false);
	const [username_v, setUsername_v] = useState(false);
	const [login_v, setLogin_v] = useState(false);


	const navigate = useNavigate();
	
	useEffect(() => {
		const storedUser = localStorage.getItem("Username");
		const storedId = localStorage.getItem("ID");
		if (storedUser && storedUser.trim() !== "" && storedId && storedId !== "0") {
			navigate("/dashboard");
		}
	}, [navigate]);

/*
	useEffect(() => {
		localStorage.setItem("ID", 0);
		localStorage.setItem("Username", "");
	});
		*/
	async function checkUser(){
	
	
		const res = await fetch(`http://localhost:3000/user/${username}`);
		const data = await res.json();
	
		console.log("At check user: ",data.exists);
		setExists(data.exists);

		return data;
		
	}
	
	function showForm(e, isRegister){
		
		e.preventDefault();
		setRegister(isRegister);

		if(!register){
			setUsername_v(false);
			setEmail_v(false);
			setConfirm_v(false);

		

		}else{
			setLogin_v(false);
		}

		clearAll();
	}

	function clearAll(){
	
		setUsername("");
		setPW("");
		setConfirmPW("");
		setDOB("");	
		setEmail("");

	
		
	
	}

	function matchPassword(){
		if(pw != "" && confirmPW != ""){
			console.log("pw: ",pw);
			console.log("confirm: ", confirmPW);
			return pw === confirmPW;
		}
		return false;
	}


	function verifyEmail(){

		let hasAtSign = false;
		let hasExt = false;
	
		
		for(let i=0; i<email.length; i++){
			if(email[i] == '@'){

			
				hasAtSign = true;
			}

		}

		
		if(email.at(-4) == "."){
			
			const ext = email.at(-4) + email.at(-3) + email.at(-2) + email.at(-1);
		
			if(ext === '.com' || ext === '.org' || ext==='.gov'){
				hasExt = true;
			}else{
				hasExt = false;
			}

		}else if(email.at(-3) == "."){
			
			const ext = email.at(-3) + email.at(-2) + email.at(-1);

			if(ext === '.ca' || ext === '.us'){
				hasExt = true;
			}else{
				hasExt = false;
			}
		}


		return hasExt && hasAtSign;

	}



	function verifyPassword(){
		
		//to implement
	}


	function nonEmpty(){
		
		if(register){
			return username != "" && pw != "" && dob != "" && email != "";
		}

		return username != "" && pw != "";

	}

	
	
	async function authUser(e){
	
		e.preventDefault();
		
		//check for empties
		//
		if(!nonEmpty()){
			console.log("Error: fields are empty");
			return;

		}

		const check = await checkUser();

	

		if(!register){
			//ensure user exists
			console.log("Authorizing...");
		

			if(check.exists){
				console.log("ready to login");
				const resp = await fetch(`http://localhost:3000/user/login`, {
					method: 'POST',
					headers: {

						"Content-Type": "application/json"
					},

					body: JSON.stringify({

						username,
						pw

					})
				

				});

				const data = await resp.json();

				if(data.success){
					console.log("Logging in...");

					localStorage.setItem("ID", data.user.id);
					localStorage.setItem("Username", data.user.username);
					localStorage.setItem("Email", data.user.email);

					navigate("/dashboard");

					console.log("Logged in: ", localStorage.getItem("ID"));
					console.log("Logged in: ", localStorage.getItem("Username"));

				}else{
					setLogin_v(true);

				}




			}else{
				console.log("user does not exist");
				setLogin_v(true);

			}
		}else{
			//ensure user does not exist first - by username, then by email
					
			console.log("Checking: ", !exists);
			console.log("Verify: ", verifyEmail());
			console.log("Match: ", matchPassword());

			if(!exists && verifyEmail() && matchPassword() && nonEmpty()){
				console.log("ready to add");

				const resp = await fetch(`http://localhost:3000/user`, {
					method: 'POST',
					headers: {
						'Content-Type' : 'application/json'
					},

					body: 
						JSON.stringify({
						username,
						pw,
						email,
						dob
						})
					
				
				})
			}else{
				console.log("auth failed");
				
				console.log("Checking: ", !exists);
				console.log("Verify: ", verifyEmail());
				console.log("Match: ", matchPassword());

				if(exists){
					console.log("user exists");
					setUsername_v(true);
				}

				if(!verifyEmail()){


					console.log("bad email");
					setEmail_v(true);
				}


				if(!matchPassword()){

					console.log("bad password");
					setConfirm_v(true);
				}





				
			}

		

		}

			


		clearAll();
	}


	return(
		<div className="loginPage"> 

		

			<ul style={{ backgroundColor: "#051019", marginBottom: "0em" }}>

				<li><img style={{ paddingTop: "2em", marginRight: "2em" }} src="jk_logo.png"/></li>
				<li><button className={!register ? "selected" : "unselected"} onClick={e => showForm(e, false)}>Login</button></li>
				<li><button className={register ? "selected" : "unselected"} onClick={e => showForm(e, true)}>Register</button></li>
			</ul>

			
			
			<div className="loginArea" style={{ marginTop: "0em" }}>

			<h1 style={{ textAlign: "center", marginBottom: "2em", fontSize: "2em" }}>Project JK</h1>

			<form className="loginForm" style={{display: !register ? "flex" : "none"}}>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
		

				<label htmlFor="password">Password</label>
				<input type="password" value={pw} name="password"  onChange={(e) => setPW(e.target.value)}/>
				<p className="error_login" style={{color: "red", display: login_v ? "block" : "none", textAlign: "center" }}>Invalid credentials</p>

				<button className="loginButton" style={{ marginBottom: "2em" }} onClick={e => authUser(e)}>Login</button>
			</form>

				<a style={{margin: "1em", textDecoration: "none", color: "black", display: !register ? "block" : "none" }} href="">Forgot Password</a>
			</div>


			<div id="registerArea">


			<form className="registerForm" style={{ display: register ? "flex" : "none"}}>
				
				<label htmlFor="rUsername">Username</label>
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="rUsername" />
				<p className="error_username" style={{color: "red", textAlign: "center", display: username_v ? "block" : "none" }}>User already exists</p>

				<label htmlFor="email">Email</label>
				<input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
				<p className="error_email" style={{color: "red", display: email_v ? "block" : "none", textAlign: "center" }}>Invalid email</p>
				
				
				<label htmlFor="rPassword">Password</label>
				<input type="password" name="rPassword" value={pw} onChange={(e) => setPW(e.target.value)}/>


				<label htmlFor="confirmPassword">Confirm Password</label>
				<input type="password" name="confirmPassword" value={confirmPW} onChange={(e) => setConfirmPW(e.target.value)} />

				<p className="error_password" style={{color: "red", display: confirm_v ? "block" : "none", textAlign: "center" }}>Passwords do not match</p>

				
				<label htmlFor="age">Date of Birth</label>
				<input type="date" name="age" value={dob} onChange={(e) => setDOB(e.target.value)}/>
			
		
				<button className="regButton" style={{ width: "200px", marginBottom: "2em" }} onClick={(e) => authUser(e)}>Register</button>
			</form>

			</div>

		</div>
	);

}

export default Login;

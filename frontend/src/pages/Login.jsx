import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css"

console.log("Testing log in");


function Login(){
	
	const [register, setRegister] = useState(false);

	
	function showForm(e, isRegister){
		
		e.preventDefault();
		setRegister(isRegister);
		console.log("Register is: ",register);
	}

	
	
	async function authUser(e){
		e.preventDefault();

		console.log("Authorizing...");

	}


	return(
		<div>
			<ul>	
				<li><button onClick={e => showForm(e, false)}>Login</button></li>
				<li><button onClick={e => showForm(e, true)}>Register</button></li>
			</ul>
			
			<form className="loginForm" style={{display: !register ? "flex" : "none"}}>
				<label htmlFor="username">Username</label>
				<input type="text" name="username" />
		

				<label htmlFor="password">Password</label>
				<input type="password" name="password" />

				<button onClick={e => authUser(e)}>Login</button>
			</form>


			<form className="registerForm" style={{ display: register ? "flex" : "none"}}>
				
				<label htmlFor="rUsername">Username</label>
				<input type="text" name="rUsername" />

				<label htmlFor="email">Email</label>
				<input type="email" /> 	
				
				<label htmlFor="rPassword">Password</label>
				<input type="password" name="rPassword" />

				<label htmlFor="confirmPassword">Confirm Password</label>
				<input type="password" name="confirmPassword" />
				
				<label htmlFor="age">Age</label>
				<input type="date" name="age"/>
			</form>



		</div>
	);

}

export default Login;

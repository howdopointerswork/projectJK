import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles/LoginA.css";

function LoginA(){
	
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
	const [pw_v, setPW_v] = useState(false);


	const navigate = useNavigate();
	return(

		<div style={{backgroundColor: "white", color: "black"}}>
			<ul className="formButtons" style={{ backgroundColor: "#01403c", marginBottom: "0em" }}>

				<li><img style={{ paddingTop: "2em", marginRight: "2em" }} height="80px" width="80px" src="/maple.png"/></li>
				<li><button>Login</button></li>
				<li><button>Register</button></li>
			</ul>

			
			
			<div className="loginArea" style={{ marginTop: "0em", border: "2px solid black" }}>

		

			<form className="loginForm" style={{fontSize: "2em"}} >
				<label htmlFor="username">Username</label>
				<input type="text" name="username"/>
		

				<label htmlFor="password">Password</label>
				<input type="password" name="password"/>
				<button className="loginButton" style={{ width: "auto", backgroundColor: "#01403c", color: "white" }}><a href="#/home">Login</a></button>
			</form>

				<button style={{textDecoration: "none", color: "white", border: "solid 2px black", borderRadius: "10px", padding: "1em", backgroundColor: "#111122" }} >Forgot Password</button>
			</div>


		
		</div>
	);

}

export default LoginA;

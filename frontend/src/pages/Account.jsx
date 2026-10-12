import {useNavigate} from "react";

import "./styles/Account.css";


import Logout from "../components/Logout";
import Search from "../components/Search";

function Account(){

	return(

		<div>



			<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/dashboard" style={{ color: "white" }}>Return</a>
			<h1 style={{color: "white", textAlign: "center", borderBottom: "2px solid white"}}>Account</h1>

			<details open style={{color: "white", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid white"}}>Privacy</summary>
				<ul>
					<li><a href="/">Change Password</a></li>
					<li><a href="/">Change Username</a></li>
					<li><a href="/">Delete Account</a></li>

				
				</ul>
			</details>


			<details style={{color: "white", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid white"}}>Accessibility</summary>
			
			</details>

			<details style={{color: "white", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid white"}}>Permissions</summary>

			
			</details>

			<details open style={{color: "white", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid white"}}>Edit</summary>
				<ul>
					<li><a href="/">Edit Diets</a></li>
					<li><a href="/">Edit Medications</a></li>
					<li><a href="/">Review Check-Ins</a></li>
				</ul>

			
			</details>
		</div>
	);
}

export default Account;

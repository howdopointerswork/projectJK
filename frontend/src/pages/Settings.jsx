import {useNavigate} from "react";

import "./styles/Settings.css";

import Logout from "../components/Logout";
import Search from "../components/Search";

function Settings(){
	
	return(

		<div style={{backgroundColor: "black", color: "white"}}>
			<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/dashboard" style={{ color: "white" }}>Return</a>
			<h1 style={{color: "white", textAlign: "center", borderBottom: "2px solid white"}}>Settings</h1>

			<details open style={{color: "white", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid white"}}>Privacy</summary>
				<ul>
					<li><a href="/">Change Age</a></li>
					<li><a href="/">Change Weight</a></li>
					<li><a href="/">Change Height</a></li>

				
				</ul>
			</details>


			<details style={{color: "white", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid white"}}>Accessibility</summary>
			
			</details>

			<details style={{color: "white", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid white"}}>Permissions</summary>

			
			</details>

			<details open style={{color: "white", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid white"}}>Customize</summary>
				<ul>
					<li><a href="/">Change Colour Scheme</a></li>
					<li><a href="/">Change Font</a></li>
				</ul>

			
			</details>

		</div>	
	);

}

export default Settings;

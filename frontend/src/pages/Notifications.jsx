import {useNavigate} from "react";


import "./styles/Notifications.css";
import Logout from "../components/Logout";
import Search from "../components/Search";


function Notifications(){


	return(

		<div>
				<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/dashboard" style={{ color: "white" }}>Return</a>
			<h1 style={{color: "white", textAlign: "center", borderBottom: "2px solid white"}}>Notifications</h1>

			<ul>
				<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You Have a New Follower!<span style={{float: "right"}}>Day/Month/Year</span></li>
				
		<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You Created a Update Your Diet Now <span style={{float: "right"}}>Day/Month/Year</span></li>
	
		<li style={{  padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em",}}>Read the New Releases of Modules! <span style={{float: "right"}}>Day/Month/Year</span></li>
	

			
			</ul>
		</div>
	);
}

export default Notifications;

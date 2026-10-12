import {useNavigate} from "react";

import "./styles/Activity.css";
import Logout from "../components/Logout";
import Search from "../components/Search";


function Activity(){

	return(
		<div>
		<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/dashboard" style={{ color: "white" }}>Return</a>
			<h1 style={{color: "white", textAlign: "center", borderBottom: "2px solid white"}}>Your Acitivty</h1>

			<ul>
				<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You updated your profile <span style={{float: "right"}}>Day/Month/Year</span></li>
				
		<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You Created a New Diet <span style={{float: "right"}}>Day/Month/Year</span></li>
	
		<li style={{  padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em",}}>You Followed UserX <span style={{float: "right"}}>Day/Month/Year</span></li>
	
		<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You updated your profile <span style={{float: "right"}}>Day/Month/Year</span></li>


				<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You Checked In! <span style={{float: "right"}}>Day/Month/Year</span></li>
				
		<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You Completed the SSRI Module <span style={{float: "right"}}>Day/Month/Year</span></li>
	
		<li style={{  padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em",}}>You updated your profile <span style={{float: "right"}}>Day/Month/Year</span></li>
	
		<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid white", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You updated your profile <span style={{float: "right"}}>Day/Month/Year</span></li>
			
			</ul>
		</div>
	);
}
export default Activity;

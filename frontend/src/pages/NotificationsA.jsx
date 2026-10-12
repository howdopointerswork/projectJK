import Search from "../components/Search";
import Logout from "../components/Logout";

function NotificationsA(){

	return(

		<div style={{backgroundColor: "white", color: "black"}}>

				<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/home" style={{ color: "black" }}>Return</a>
			<h1 style={{color: "black", textAlign: "center", borderBottom: "2px solid black"}}>Notifications</h1>

			<ul style={{backgroundColor: "white"}}>
				<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid black", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You Have a New Follower!<span style={{float: "right"}}>Day/Month/Year</span></li>
				
		<li style={{padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid black", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em"}}>You Created a Update Your Diet Now <span style={{float: "right"}}>Day/Month/Year</span></li>
	
		<li style={{  padding: "0.5em", backgroundColor: "white", margin: "0 auto", border: "2px solid black", borderRadius: "10px", color: "black", textAlign: "center", marginBottom: "1em",}}>Read the New Releases of Modules! <span style={{float: "right"}}>Day/Month/Year</span></li>
	

			
			</ul>
		</div>

	);

}

export default NotificationsA;

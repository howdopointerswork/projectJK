import Search from "../components/Search";
import Logout from "../components/Logout";



function AccountA(){



	return(
			<div style={{backgroundColor: "white", color: "black"}}>

			<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/home" style={{ color: "black" }}>Return</a>
			<h1 style={{color: "white", textAlign: "center", borderBottom: "2px solid black"}}>Account</h1>

			<details open style={{color: "black", fontSize: "1.5em"}}>
				<summary style={{color: "black",fontSize: "2em", borderBottom: "2px solid black"}}>Privacy</summary>
				<ul> 
					<li><a style={{color: "black"}} href="/">Change Password</a></li>
					<li><a style={{color: "black"}} href="/">Change Username</a></li>
					<li><a style={{color: "black"}} href="/">Delete Account</a></li>

				
				</ul>
			</details>


			<details style={{color: "black", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid black"}}>Accessibility</summary>
			
			</details>

			<details style={{color: "black", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid black"}}>Permissions</summary>

			
			</details>

			<details open style={{color: "black", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid black"}}>Edit</summary>
				<ul>
					<li><a style={{color: "black"}} href="/">Edit Diets</a></li>
					<li><a style={{color: "black"}} href="/">Edit Medications</a></li>
					<li><a style={{color: "black"}} href="/">Review Check-Ins</a></li>
				</ul>

			
			</details>

		</div>

	);

}

export default AccountA;

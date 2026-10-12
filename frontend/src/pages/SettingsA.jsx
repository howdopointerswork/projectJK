import Search from "../components/Search";
import Logout from "../components/Logout";


function SettingsA(){
	return(

		<div style={{backgroundColor: "white", color: "black"}}>

			<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/home" style={{ color: "black" }}>Return</a>
			<h1 style={{color: "black", textAlign: "center", borderBottom: "2px solid black"}}>Settings</h1>

			<details open style={{color: "black", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid black"}}>Privacy</summary>
				<ul>
					<li><a style={{color: "black"}} href="/">Change Age</a></li>
					<li><a style={{color: "black"}} href="/">Change Weight</a></li>
					<li><a style={{color: "black"}} href="/">Change Height</a></li>

				
				</ul>
			</details>


			<details style={{color: "black", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid black"}}>Accessibility</summary>
			
			</details>

			<details style={{color: "black", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid black"}}>Permissions</summary>

			
			</details>

			<details open style={{color: "black", fontSize: "1.5em"}}>
				<summary style={{fontSize: "2em", borderBottom: "2px solid black"}}>Customize</summary>
				<ul>
					<li><a style={{color: "black"}} href="/">Change Colour Scheme</a></li>
					<li><a style={{color: "black"}} href="/">Change Font</a></li>
				</ul>

			
			</details>

		</div>

	);


}

export default SettingsA;

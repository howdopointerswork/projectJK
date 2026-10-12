import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react";

import Logout from "../components/Logout";
import Search from "../components/Search";
import NavigationA from "../components/NavigationA";

import "./styles/LearnA.css";

function LearnA(){

	const [open, setOpen] = useState(false);

	return(

		<div style={{color: "black", backgroundColor: "white", margin: "0 auto"}}>
		
		<header style={{ float: "right" }}>

				<Search className="search" />	
					
				<Logout />
			
			
		</header>

		<button onClick={() => setOpen(!open)}>My Profile</button>

		<div className="dropdown" style={{ backgroundColor: "grey", position: "absolute", overflowY: "auto", height: "250px", width: "200px", margin: "0 auto", display: open ? "block" : "none" }}>
			<ul className="displayDropdown" style={{ color: "black", textAlign: "center", display: "flex", flexDirection: "column" }}>
				
				<button><a href="/profileA">Profile</a></button>
				<button><a href="/checkinA">Survey</a></button>
				<button><a href="/accountA">Account</a></button>
				<button><a href="/settingsA">Settings</a></button>
				<button><a href="/notificationsA">Notifications</a></button>

			</ul>

			</div>

		<h1 style={{textAlign: "center"}}>Learn</h1>
		<NavigationA />



		<div className="contentL">



			<div style={{borderBottom: "solid 4px black"}}>
			<button style={{backgroundColor: "#01403c", fontSize: "2em", color: "white"}}>Saved</button>
			<button style={{backgroundColor: "#01403c", fontSize: "2em", color: "white"}}>Continue</button>

			<div className="searchL" style={{float: "right"}}>
				<input style={{fontSize: "2em"}} type="text"/>
				<button style={{fontSize: "2em"}}>Search</button>
			</div>
			</div>	
			<div style={{ margin: "0 auto", display: "flex", justifyContent: "center" }}>
				<img src="/books.jpg" />
			</div>


			<div style={{ margin: "0 auto"}}>
				<table style={{margin: "0 auto", color: "white", border: "solid 8px black"}}>
					<tbody> 
						<tr>
							<td><figure style={{backgroundColor: "#941b03"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #941b03", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>
						



						<td><figure style={{backgroundColor: "navy"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px navy", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


	<td><figure style={{backgroundColor: "#01403c"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #01403c", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


	<td><figure style={{backgroundColor: "#01403c"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #01403c", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


						</tr>



		<tr>
							<td><figure style={{backgroundColor: "#bf5e04"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #bf5e04", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>
						



						<td><figure style={{backgroundColor: "#01403c"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #01403c", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


	<td><figure style={{backgroundColor: "purple"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px purple", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


	<td><figure style={{backgroundColor: "navy"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px navy", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


						</tr>

		<tr>
							<td><figure style={{backgroundColor: "gold"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px gold", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>
						



						<td><figure style={{backgroundColor: "#941b03"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #941b03", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


	<td><figure style={{backgroundColor: "navy"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px navy", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


	<td><figure style={{backgroundColor: "navy"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px navy", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


						</tr>
		<tr>
							<td><figure style={{backgroundColor: "#01403c"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #01403c", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>
						



						<td><figure style={{backgroundColor: "purple"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px purple", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


	<td><figure style={{backgroundColor: "#bf5e04"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #bf5e04", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


	<td><figure style={{backgroundColor: "#01403c"}}><img src="/book.png" style={{backgroundColor: "white", border: "solid 8px #01403c", padding: "1.5em"}} height="200px" width="200px"/> <figcaption style={{textAlign: "center"}}>Module<button>Read</button></figcaption></figure></td>


						</tr>
						</tbody>
				</table>
			</div>
		</div>

		</div>

	);

}

export default LearnA;

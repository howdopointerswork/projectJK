import { useEffect, useState} from "react";
import React from "react";
import { useNavigate } from "react";


import Logout from "../components/Logout";
import Search from "../components/Search";
import NavigationA from "../components/NavigationA";

import "./styles/ExploreA.css";

function ExploreA(){

	const [open, setOpen] = useState(false);

	return(

		<div style={{backgroundColor: "white", margin: "0 auto"}}>
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

			<h1 style={{textAlign: "center"}}>Explore</h1>

			<NavigationA />


			<div className="exa_content">
					<div className="exa_search">

					<input type="text" style={{fontSize: "2em"}}/>
					<button style={{fontSize: "2em"}}>Search</button>

					</div>
				<div className="exa_filters" style={{backgroundColor: "grey"}}>
					<h1>Filter</h1>

					<details open>
						<summary>By Attribute</summary>
						<ul>
							<li><input type="radio"/>Protein</li>
							<li><input type="radio" />Sodium</li>
							<li><input type="radio" />Sugar</li>
							<li><input type="radio" />Fat</li>
							<li><input type="radio" />Omega 3</li>
						
						</ul>
					</details>


					<details open>
						<summary>By Group</summary>

						<ul>

							<li><input type="radio"/>Vegetables</li>
							<li><input type="radio"/>Legumes</li>
							<li><input type="radio"/>Meats and Proteins</li>
							<li><input type="radio"/>Dairy</li>
						</ul>
					
					</details>


					<h2>By Range</h2>
						<select>
							<option>Protein</option>
							<option>Fat</option>
							<option>Calories</option>
							<option>Calcium</option>
							<option>Carbs</option>

						</select>
						<ul>
							<li><input type="text"/></li>
							<li><input type="text"/></li>
						</ul>

						<button>Apply</button>

				</div>


				<div className="exa_catalog">
								
					<table style={{color: "black"}}>
						<tbody>	
							<tr>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>

								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>


							</tr>


				<tr>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>

								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>


							</tr>



				<tr>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>

								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>


							</tr>
				<tr>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>

								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>


							</tr>
				<tr>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>
								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>

								<td><figure><img src="/burger.png" height="100px" width="100px" style={{backgroundColor: "white", border: "2px solid black"}}/><figcaption>Item</figcaption></figure></td>


							</tr>


						</tbody>
					</table>

				</div>




			</div>
		</div>

	);

}


export default ExploreA;

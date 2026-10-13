import { useState, useEffect} from "react";
import React from "react";
import { useNavigate } from "react";


import Logout from "../components/Logout";
import Search from "../components/Search";
import NavigationA from "../components/NavigationA";

import "./styles/DiscoverA.css";

function DiscoverA(){

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
				
				<button><a href="/projectJK/profileA">Profile</a></button>
				<button><a href="/projectJK/checkinA">Survey</a></button>
				<button><a href="/projectJK/accountA">Account</a></button>
				<button><a href="/projectJK/settingsA">Settings</a></button>
				<button><a href="/projectJK/notificationsA">Notifications</a></button>

			</ul>

			</div>

		<h1 style={{textAlign: "center"}}>Discover</h1>
		<NavigationA />

			<div className="searchLocations" style={{backgroundColor: "#01403c"}}>
				<input type="text" placeholder="Search" style={{fontSize: "2em"}}/>
				<button style={{fontSize: "2em"}}>Search</button>
		
			</div>

			<div className="contentD" style={{fontSize: "2em", backgroundColor: "#111122", color: "white"}}>
			<ul className="selection">
				<li><select style={{fontSize: "1em"}}>
					<option value="" disabled selected>Select Location</option>
					<option>Surrey</option>
					<option>Langley</option>
					<option>Delta</option>
					<option>Cloverdale</option>
					<option>Coquitlam</option>
					<option>Richmond</option>
					<option>Burnaby</option>
				</select></li>

				<li><select  style={{fontSize: "1em"}}>
					<option value="" disabled selected>Select Time</option>
					<option>8:00-9:00</option>
					<option>9:00-10:00</option>
					<option>10:00-11:00</option>
					<option>11:00-12:00</option>
					<option>12:00-1:00</option>
					<option>1:00-2:00</option>
					<option>2:00-3:00</option>
					<option>3:00-4:00</option>
				</select></li>


				<li><select  style={{fontSize: "1em"}}>
					<option value="" disabled selected>Select Facility Type</option>
					<option>General Practice</option>
					<option>Psychiatry</option>
					<option>Hospital</option>

				
				</select></li>

			</ul>

				<table className="results">
					<thead>
						<tr><td colspan="3"><h1>Results</h1></td></tr>
						<tr>
							<td style={{fontWeight: "bold"}}>Name</td>
							<td style={{fontWeight: "bold"}}>Location</td>
							<td style={{fontWeight: "bold"}}>Type</td>
						
						</tr>

					</thead>

					<tbody>
						<tr>
							<td>FacilityName</td>
							<td>Location</td>
							<td>FacilityType</td>
							<td><button style={{backgroundColor: "green", border: "none"}}>Book</button></td>
						
						</tr>
		<tr>
							<td>FacilityName</td>
							<td>Location</td>
							<td>FacilityType</td>
							<td><button style={{backgroundColor: "green", border: "none"}}>Book</button></td>
						
						</tr>

		<tr>
							<td>FacilityName</td>
							<td>Location</td>
							<td>FacilityType</td>
							<td><button style={{backgroundColor: "green", border: "none"}}>Book</button></td>
						
						</tr>


		<tr>
							<td>FacilityName</td>
							<td>Location</td>
							<td>FacilityType</td>
							<td><button style={{backgroundColor: "green", border: "none"}}>Book</button></td>
						
						</tr>

		<tr>
							<td>FacilityName</td>
							<td>Location</td>
							<td>FacilityType</td>
							<td><button style={{backgroundColor: "green", border: "none"}}>Book</button></td>
						
						</tr>


		<tr>
							<td>FacilityName</td>
							<td>Location</td>
							<td>FacilityType</td>
							<td><button style={{backgroundColor: "green", border: "none"}}>Book</button></td>
						
						</tr>

					</tbody>
				</table>
			</div>


			
		</div>

	);

}

export default DiscoverA;

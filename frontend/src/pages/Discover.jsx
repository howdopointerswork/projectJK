import {useState, useEffect} from "react";
import {useNavigate} from "react";

import Search from "../components/Search";
import Logout from "../components/Logout";

import "./styles/Discover.css"

function Discover(){

	return(
		<div className="discoverAll">
	
			<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/dashboard" style={{ color: "white" }}>Return</a>
			<h1 style={{color: "white", textAlign: "center", borderBottom: "2px solid white", borderTop: "2px solid white", backgroundColor: "#111122"}}>Discover</h1>i

			<div className="discover" style={{borderBottom: "2px solid white"}}>
			
			<div className="right">
			<div className="search" style={{margin: "0 auto", justifyContent: "center", alignItems: "center"}}>
				<input type="text" placeholder="Search Location" style={{ margin: "0 auto", textAlign: "center", fontSize: "1.5em", borderRadius: "10px" }}/>
				<button>Search</button>
			</div>
			<div className="gps">

				<img style={{margin: "0 auto"}} height="600px" width="800px" src="/map.png"/>
			</div>
			</div>

			<div className="facilities">
				<table style={{ color: "white", margin: "0 auto", padding: "2em", border: "2px solid white"}}>
					<thead>
					<tr style={{borderBottom: "solid 2px white"}}>
						<td>Name</td>
						<td>Location</td>
						<td>Time</td>
						<td>Type</td>
					
					</tr>
					</thead>
					<tbody>
						<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button>Book</button></td>
							
						</tr>

							<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button>Book</button></td>
							
						</tr>



								<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button>Book</button></td>
							
						</tr>



								<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
							
								<td><button>Book</button></td>
						</tr>


								<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button>Book</button></td>
							
						</tr>


			<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button>Book</button></td>
							
						</tr>



								<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
							
								<td><button>Book</button></td>
						</tr>


								<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button>Book</button></td>
							
						</tr>



			<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button>Book</button></td>
							
						</tr>



								<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
							
								<td><button>Book</button></td>
						</tr>


								<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button>Book</button></td>
							
						</tr>
					</tbody>
				</table>
			</div>
			</div>
			<div>
			<h1 style={{ textAlign: "center", borderBottom: "solid 2px white", color: "white", marginTop: "1.5em"}}>Previous Bookings</h1>
					<table style={{ color: "white", width:"100%", padding: "2em", border: "2px solid white", backgroundColor: "#111122"}}>
					<thead>
					<tr style={{borderBottom: "solid 2px white"}}>
						<td style={{borderBottom: "solid 2px white"}}>Name</td>
						<td style={{borderBottom: "solid 2px white"}}>Location</td>
						<td style={{borderBottom: "solid 2px white"}}>Last Visit</td>
						<td style={{borderBottom: "solid 2px white"}}>Type</td>
					
					</tr>
					</thead>
					<tbody>
						<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button style={{backgroundColor: "green"}}>Re-Book</button></td>
							
						</tr>

	<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button style={{backgroundColor: "green"}}>Re-Book</button></td>
							
						</tr>

	<tr>
							<td>FacilityName</td>
							<td>FacilityLocation</td>
							<td>TimesOpen</td>
							<td>General Practice</td>
								<td><button style={{backgroundColor: "green"}}>Re-Book</button></td>
							
						</tr>

					</tbody>
					</table>
			</div>
		</div>

	);
}

export default Discover;

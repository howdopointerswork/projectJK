import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import Logout from "../components/Logout";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import "./styles/Dashboard.css";

function Dashboard(){

	const navigate = useNavigate();

	const id = localStorage.getItem("ID");

	useEffect(() => {

		console.log("ID: ",localStorage.getItem("ID"));
		console.log("Username: ", localStorage.getItem("Username"));
	
		if(localStorage.getItem("ID") == 0 || localStorage.getItem("Username") == ""){
		
			navigate("/");
		}
	}, [navigate]);

	return(

		<div className="dashboard">
			
			<header style={{ float: "right" }}>

				<Search className="search" />	
					
				<Logout />
			
			
			</header>
		
		
			
			<h1 style={{ textAlign: "center", color: "white" }}>Dashboard</h1>
			
			
			<div className="content" style={{overflowY: "auto"}}>

				<div style={{ padding: "1em", overflowY: "auto"}} className="One">
				
					<img src="/user.png" height="80px" width="80px" style={{marginTop: "1em"}}/>
						<br></br>
					<a style={{ textDecoration: "none", color: "black", backgroundColor: "white", borderRadius: "10px", padding: "0.5em" }} href={`/profile/${id}`}>{localStorage.getItem("Username")}</a>
				

				
				
					<Navigation
					/>

					<h3 style={{color: "white", textAlign: "center"}}>What People Are Saying:</h3>

					<h4 style={{color: "white", textAlign: "left"}}>Following_User2</h4>
							<p>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et</p>

				</div>
				<div className="Two">


			<button><a href="/home">Prototype A Portal</a></button>

					<table style={{color: "white", textAlign: "center", margin: "0 auto", borderBottom: "2px solid white"}}>
						<thead>
							<tr>
								<td style={{padding: "0.5em"}}>Diets</td>
								<td style={{padding: "0.5em"}}>Meds</td>
								<td style={{padding: "0.5em"}}>Account Age</td>
								<td style={{padding: "0.5em"}}>Followers</td>
							</tr>
						</thead>


						<tbody>
								<td style={{padding: "0.5em"}}>8</td>
								<td style={{padding: "0.5em"}}>10</td>
								<td style={{padding: "0.5em"}}>31 Days</td>
								<td style={{padding: "0.5em"}}>14</td>

						</tbody>
					</table>

				

					<img src="/health.jpg" style={{marginTop: "1em"}}/>

					<p style={{color: "white"}}>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et</p>
				</div>	
				
				
				<div className="Three" style={{overflowY: "auto"}}>

				<button style={{padding: "none", margin: "0 auto"}}><a style={{fontSize: "1.5em"}} href="/discover">Discover</a></button>
				<ul style={{textAlign: "center", margin: "0 auto"}}>
				

				<li><label htmlFor="chooseCountry">Select City</label></li>	
				<li><select style={{fontSize: "1.5em"}} className="chooseCity">
					<option>Canada</option>
					<option>United States</option>
					<option>UK</option>
					<option>Australia</option>
					<option>Germany</option>
					<option>France</option>
					<option>Mexico</option>
					<option>Cuba</option>

				</select></li>


				<li><label htmlFor="chooseCity">Select City</label></li>	
				<li><select style={{fontSize: "1.5em"}} className="chooseCity">
					<option>Vancouver</option>
					<option>Toronto</option>
					<option>Montreal</option>
					<option>Calgary</option>
					<option>Edmonton</option>
					<option>Halifax</option>
					<option>Winnipeg</option>
					<option>Saskatoon</option>

				</select></li>

				<li>
				<table height="100px" style={{ color: "white", margin: "0 auto", padding: "1em", border: "2px solid white", overflowY: "auto"}}>
					<thead>
					<tr style={{borderBottom: "solid 2px white"}}>
						<td>Name</td>
						<td>Location</td>
				
					
					</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityName</td>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityLocation</td>
				
							<td><button style={{fontSize: "0.75em", backgroundColor: "green", border: "none"}}>Book</button></td>
														
						</tr>

							<tr>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityName</td>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityLocation</td>
					
							<td><button style={{fontSize: "0.75em", backgroundColor: "green", border: "none"}}>Book</button></td>
														
						</tr>
		<tr>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityName</td>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityLocation</td>
						
							<td><button style={{fontSize: "0.75em", backgroundColor: "green", border: "none"}}>Book</button></td>
														
						</tr>


		<tr>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityName</td>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityLocation</td>
						
							<td><button style={{fontSize: "0.75em", backgroundColor: "green", border: "none"}}>Book</button></td>
														
						</tr>
		<tr>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityName</td>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityLocation</td>
						
							<td><button style={{fontSize: "0.75em", backgroundColor: "green", border: "none"}}>Book</button></td>
														
						</tr>

		<tr>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityName</td>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityLocation</td>
						
							<td><button style={{fontSize: "0.75em", backgroundColor: "green", border: "none"}}>Book</button></td>
														
						</tr>

		<tr>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityName</td>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityLocation</td>
						
							<td><button style={{fontSize: "0.75em", backgroundColor: "green", border: "none"}}>Book</button></td>
														
						</tr>

		<tr>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityName</td>
							<td style={{padding: "0.25em", fontSize: "0.75em"}}>FacilityLocation</td>
					
							<td><button style={{fontSize: "0.75em", backgroundColor: "green", border: "none"}}>Book</button></td>
														
						</tr>




					</tbody>
					</table>
		

				</li>

				</ul>

				</div>


				<div className="Four">
				
				<h2 style={{color: "white"}}>Check-In</h2>

				<p>It has been <span style={{color: "red"}}>9</span> Days since your last Check-In</p>

				<button><a href="/checkin">Check-In Now</a></button>
				
				</div>
				

				<div className="Five" height="50px" style={{overflowY: "auto"}}>

					<h2 style={{color: "white", textAlign: "center"}}>More Foods For You</h2>
					<button><a style={{fontSize: "2em"}} href="/explore">Explore</a></button>	

					<ul style={{textAlign: "left"}}>
							<li style={{backgroundColor: "#8f1414"}}>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="80px" width="80px"/>
							<span style={{color: "white", fontSize: "1.5em", marginLeft: "1em"}}>Item Name</span>
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>View</button>

							</li>

							<li style={{backgroundColor: "#8f1414"}}>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="80px" width="80px"/>
							<span style={{color: "white", fontSize: "1.5em", marginLeft: "1em"}}>Item Name</span>
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>View</button>

							</li>

							<li style={{backgroundColor: "#249615"}}>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="80px" width="80px"/>
							<span style={{color: "white", fontSize: "1.5em", marginLeft: "1em"}}>Item Name</span>
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>View</button>

							</li>

							<li style={{backgroundColor: "#8f1414"}}>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="80px" width="80px"/>
							<span style={{color: "white", fontSize: "1.5em", marginLeft: "1em"}}>Item Name</span>
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>View</button>

							</li>

							<li style={{backgroundColor: "#f5f107"}}>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="80px" width="80px"/>
							<span style={{color: "white", fontSize: "1.5em", marginLeft: "1em"}}>Item Name</span>
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>View</button>

							</li>


					</ul>

				
				
				
				</div>


				<div className="Six" style={{overflowY: "auto"}}>

					<h2 style={{color: "white", textAlign: "center"}}><button><a href="/learn">Learn</a></button></h2>
					<h3 style={{color: "white", textAlign: "center"}}>Recommended:</h3>
		
		<h4 style={{color: "white", textAlign: "left"}}>SSRIs: Module <span><button style={{textAlign: "right"}}>Go</button></span></h4>
		<h4 style={{color: "white", textAlign: "left"}}>Narcotics: Module <span><button style={{textAlign: "right"}}>Go</button></span></h4>
		<h4 style={{color: "white", textAlign: "left"}}>Health Concerns: Article <span><button style={{textAlign: "right"}}>Go</button></span></h4>

				</div>

			
			</div>

		

		</div>


	);

}

export default Dashboard;

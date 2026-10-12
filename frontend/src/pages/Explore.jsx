import {useEffect, useState} from "react";
import React from "react";

import Search from "../components/Search";
import Logout from "../components/Logout";

import "./styles/Explore.css";


function Explore(){
	
	return(
		<div>
			<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/dashboard" style={{ color: "white" }}>Return</a>
			<h1 style={{color: "white", textAlign: "center", borderTop: "2px solid white", borderBottom: "2px solid white", marginTop: "1em", backgroundColor: "#111122"}}>Explore</h1>

			<div className="catalog">
				<div className="one" style={{paddingTop: "6em"}}>
					
					<input type="text" placeholder="Search"/>
			
					<button style={{margin: "0 auto"}}>Search</button>
				</div>
			
				<div className="two" style={{paddingTop: "2.5em"}}>
					<div style={{backgroundColor: "white"}}>
					<img style={{marginRight: "1em", padding: "1em", float: "left", backgroundColor: "white"}} height="200px" width="200px" src="/burger.png"/>
					</div>
					<ul> 
						<li>Item Name</li>
						<li>Attribute1</li>
						<li>Attribute2</li>
						<li>Attribute3</li>
						<li>Description: <p>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et</p></li>
					</ul>
				</div>

				<div className="three" style={{borderRight: "2px solid black" }}>
					<h2 style={{ borderBottom: "2px solid white" }}>Jump To</h2>
					
					<details>
						<summary>Group / Family</summary>
						<ul>
							<li>Group1</li>
							<li>Group2</li>
							<li>Group3</li>
							<li>Group4</li>
							<li>Group5</li>
						</ul>
					</details>

					<details>
						<summary style={{backgroundColor: "red"}}>Proteins</summary>
						<ul>
							<li>Item1</li>
							<li>Item2</li>
							<li>Item3</li>
							<li>Item4</li>
							<li>Item5</li>
						</ul>

					</details>

					<details>
						<summary style={{backgroundColor: "gold"}}>Carbs</summary>
						<ul>
							<li>Item1</li>
							<li>Item2</li>
							<li>Item3</li>
							<li>Item4</li>
							<li>Item5</li>
						</ul>

					</details>

					<details>
						<summary style={{backgroundColor: "purple"}}>Fats</summary>
						<ul>
							<li>Item1</li>
							<li>Item2</li>
							<li>Item3</li>
							<li>Item4</li>
							<li>Item5</li>
						</ul>

					</details>

					<details>
						<summary style={{backgroundColor: "brown"}}>Fibres</summary>
						<ul>
							<li>Item1</li>
							<li>Item2</li>
							<li>Item3</li>
							<li>Item4</li>
							<li>Item5</li>
						</ul>

					</details>
				</div>

				<div className="four">

					<h2 style={{textAlign: "center", borderBottom: "2px solid white" }}>Catalog</h2>
					<ul>
						<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>
						

						<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>

							<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>


					<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>



								<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>

							<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>


					<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>


									<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>

							<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>


					<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>


								<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>

							<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>


					<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>

			<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>

							<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>


					<li>
							<img style={{marginRight: "0.5em",backgroundColor: "white"}} src="/burger.png" height="50px" width="50px"/>
							Item Name
							<button style={{ fontSize: "1em", float: "right", marginTop: "0.5em"}}>Add</button>

						</li>

					

					</ul>

				</div>

			</div>
			
		</div>
	);

}

export default Explore;

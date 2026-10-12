import {useEffect, useState} from "react";
import React from "react";
import {useNavigate} from "react";

import "./styles/Learn.css";

import Search from "../components/Search";
import Logout from "../components/Logout";

function Learn(){

	return(

		<div style={{backgroundColor: "black"}}>
			<h1 style={{color: "white", textAlign: "center", borderBottom: "2px solid white", backgroundColor: "#111122"}}>Learn</h1>

			<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/dashboard" style={{ color: "white" }}>Return</a>
			<br></br>
					<h2 style={{color: "white", textAlign: "center", borderBottom: "solid 2px white", borderTop: "solid 2px white", marginTop: "1.5em", backgroundColor: "#111122"}}>Modules</h2>
					<ul style={{display: "flex", flexDirection: "horizontal", overflowX: "auto"}}>
						
						<li><figure>
						<button style={{backgroundColor: "#111122"}}><img src="/book.png" height="80px" width="80px" style={{padding: "0.5em"}}/></button>
						<figcaption style={{color: "white"}}>Module 1</figcaption>
						</figure></li>
			<li><figure>
						<button style={{backgroundColor: "#111122"}}><img src="/book.png" height="80px" width="80px" style={{padding: "0.5em"}}/></button>
						<figcaption style={{color: "white"}}>Module 2</figcaption>
						</figure></li>

									<li><figure>
						<button style={{backgroundColor: "#111122"}}><img src="/book.png" height="80px" width="80px" style={{padding: "0.5em"}}/></button>
						<figcaption style={{color: "white"}}>Module 3</figcaption>
						</figure></li>
			<li><figure>
						<button  style={{backgroundColor: "#111122"}}><img src="/book.png" height="80px" width="80px" style={{padding: "0.5em"}}/></button>
						<figcaption style={{color: "white"}}>Module 4</figcaption>
						</figure></li>
		<li><figure>
						<button style={{backgroundColor: "#111122"}}><img src="/book.png" height="80px" width="80px" style={{padding: "0.5em"}}/></button>
						<figcaption style={{color: "white"}}>Module 5</figcaption>
						</figure></li>
			<li><figure>
						<button style={{backgroundColor: "#111122"}}><img src="/book.png" height="80px" width="80px" style={{padding: "0.5em"}}/></button>
						<figcaption style={{color: "white"}}>Module 6</figcaption>
						</figure></li>


		<li><figure>
						<button style={{backgroundColor: "#111122"}}><img src="/book.png" height="80px" width="80px" style={{padding: "0.5em"}}/></button>
						<figcaption style={{color: "white"}}>Module 1</figcaption>
						</figure></li>
			<li><figure>
						<button style={{backgroundColor: "#111122"}}><img src="/book.png" height="80px" width="80px" style={{padding: "0.5em"}}/></button>
						<figcaption style={{color: "white"}}>Module 1</figcaption>
						</figure></li>
					</ul>
					<div className="viewer" style={{overflowY: "auto", marginTop: "0.5em"}}>


				<div className="sidebar" height="600px" style={{border: "solid 2px white", backgroundColor: "#111122"}}> 
					<h1 style={{color: "white", textAlign: "center", borderBottom: "solid 2px white"}}>ModuleTitle</h1>
						<div>
						<details open style={{color: "white", textAlign: "left"}}>
							<summary style={{fontSize: "2em", fontWeight: "bold"}}>Chapters</summary>	
							<ul>
								<li>
									<details open>
									<summary style={{fontWeight: "bold"}}>Chapter 1</summary>
									<ul>	
										<li style={{marginLeft: "2em"}}>Chapter 1.1</li>
										<li style={{marginLeft: "2em"}}>Chapter 1.2</li>
										<li style={{marginLeft: "2em"}}>Chapter 1.3</li>
									</ul>
									</details>
								</li>

									<li>
									<details open>
									<summary style={{fontWeight: "bold"}}>Chapter 2</summary>
									<ul>	
										<li style={{marginLeft: "2em"}}>Chapter 2.1</li>
										<li style={{marginLeft: "2em"}}>Chapter 2.2</li>
										<li style={{marginLeft: "2em"}}>Chapter 2.3</li>
									</ul>
									</details>
								</li>

								
									<li>
									<details open>
									<summary style={{fontWeight: "bold"}}>Chapter 3</summary>
									<ul>	
										<li style={{marginLeft: "2em"}}>Chapter 3.1</li>
										<li style={{marginLeft: "2em"}}>Chapter 3.2</li>
										<li style={{marginLeft: "2em"}}>Chapter 3.3</li>
									</ul>
									</details>
								</li>

							</ul>

						</details>
						</div>
				</div>

				<div className="mainContent"  style={{border: "2px solid white", padding: "1em", overflowY: "auto", backgroundColor: "#111122"}}>

					<h1 style={{color: "white", textAlign: "center", margin: "0", borderBottom: "2px solid white",  backgroundColor: "#111122"}}>Section Title</h1>

					<h2 style={{color: "white", textAlign: "left"}}>Heading</h2>
					<p style={{color: "white"}}>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat</p>
					<img src="/camera.png" height="300px" width="400px" style={{padding: "1em", marginRight: "1em", float: "left",backgroundColor: "grey", overflowY: "auto"}}/>
					<p style={{color: "white"}}>
					

					lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et
					<br></br><br></br>
						lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et

		lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et

		lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et

		lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et

<br></br>
<br></br>
		lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et


					</p>
				</div>
			</div>
		</div>

	);

}

export default Learn;

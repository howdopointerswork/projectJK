import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles/Home.css";

import Search from "../components/Search";
import Logout from "../components/Logout";
import NavigationA from "../components/NavigationA";

function Home(){

	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	return(

		<div style={{backgroundColor: "white"}}>

		<header style={{ float: "right" }}>

				<Search className="home_search" />	
					
				<Logout />
			
			
		</header>
			<button onClick={() => setOpen(!open)}>My Profile</button>

		<div className="dropdown" style={{ backgroundColor: "grey", position: "absolute", overflowY: "auto", height: "250px", width: "200px", margin: "0 auto", display: open ? "block" : "none" }}>
			<ul className="displayDropdown" style={{ color: "black", textAlign: "center", display: "flex", flexDirection: "column" }}>
				
				<button><a href="#/profileA">Profile</a></button>
				<button><a href="#/checkinA">Survey</a></button>
				<button><a href="#/accountA">Account</a></button>
				<button><a href="#/settingsA">Settings</a></button>
				<button><a href="#/notificationsA">Notifications</a></button>

			</ul>

			</div>
		<div style={{backgroundColor: "white", color: "black", textAlign: "center"}}>
			<h1 style={{fontSize: "2em"}}>Home</h1>

			<NavigationA />
			<h1 style={{borderBottom: "2px solid black"}}>Article Title</h1>
			<div style={{borderBottom: "2px solid black"}} className="home_slideshow">
				<figure>
					<img src="/projectJK/health.jpg" height="600px"/>
					<figcaption>
					
				

					</figcaption>

				</figure>

				<p className="home_preview" style={{lineSpacing: "2.5em", width: "100%", textAlign: "center", margin: "0 auto", backgroundColor: "#01403c", color: "white"}}><br></br><br></br>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et
			<br></br>
			<br></br>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et<br></br><br></br>


		lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et
		
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>

		<a style={{backgroundColor: "white", color: "black", padding: "0.5em", borderRadius: "10px"}} href="/">Read More</a>


		</p>
			<div style={{border: "solid 4px black", display: "flex", justifyContent: "center",overflowX: "auto", margin: "0 auto", width: "168%", textAlign: "center"}}>
		
			<ul style={{display: "flex", flexDirection: "horizontal", justifyContent: "center", textAlign: "center"}}>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
	<li><figure style={{ backgroundColor: "#01403c", padding: "1em"}}><img style={{backgroundColor: "white",border: "4px solid black", padding: "0.5em"}} src="/projectJK/camera.png" height="100px" width="100px"/><figcaption style={{backgroundColor: "white", borderRadius: "10px", color: "black", marginTop: "0.5em"}}>Article</figcaption></figure></li>
				</ul>
				</div>
			</div>
			<div className="home_remainder">

			<div style={{backgroundColor: "#111122", color: "white"}} className="home_article1">
				<h1>When Was Your Last Visit?</h1>
				<img src="/projectJK/heart.jpeg" height="400px" width="800px" style={{border: "4px solid white"}}/>
				<p>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et<br></br><br></br>
lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et
</p>
			</div>
				
				<ul style={{color: "black", fontSize: "2em"}}>
					<li>Quick Links</li>
					<li style={{backgroundColor: "#01403c"}}><a href="/">Health Canada / Food Guide</a></li>
					<li style={{backgroundColor: "#111122"}}><a href="/">Fraser Health</a></li>
					<li style={{backgroundColor: "#01403c"}}><a href="/">Web MD</a></li>
					<li style={{backgroundColor: "#111122"}}><a href="/">Mayo Clinic</a></li>
					<li style={{backgroundColor: "#01403c"}}><a href="/">Healthlink BC</a></li>
					<li style={{backgroundColor: "#111122"}}><a href="/">Take Our Survey</a></li>
					<li style={{backgroundColor: "#01403c"}}><a href="/">CDC</a></li>
					<li style={{backgroundColor: "#111122"}}><a href="/">Pain Free Health Clinic</a></li>
					<li style={{backgroundColor: "#01403c"}}><a href="/">WHO</a></li>
				</ul>

			</div>

			<div height="250px" style={{backgroundColor: "#111122", color: "white"}}>
				<h1>Learn from Modules</h1>
			<img src="/projectJK/camera.png" height="200px" width="300px" style={{backgroundColor: "white"}}/>
				<p>
				
lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et
lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et

				
				</p>

			
			</div>


			<div className="home_bottom" style={{color: "white"}}>

				<div className="home_one" style={{backgroundColor: "#111122"}}>
					<h1>Heading</h1>
					<p>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et</p>	
				</div>


				<div className="home_two" style={{backgroundColor: "#01403c"}}>
					<h1>Heading</h1>
					<p>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et</p>	
				</div>
			

				<div className="home_three" style={{backgroundColor: "#111122"}}>
					<h1>Heading</h1>
					<p>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et</p>	
				</div>
			
				<div className="home_four" style={{backgroundColor: "#01403c"}}>
		<h1>Heading</h1>
					<p>lorem ipsum dolor sit amet consectetur adipiscing elit distinctio nisi accusamus consequat deserunt imperdiet facilis officia non similique est culpa dolor est blanditiis culpa vero aliqua nobis et qui sint eos sint ut ut nisi corrupti dolorem reprehenderit minus consequatur cupidatat occaecat quo sit cillum soluta do esse quibusdam et</p>	
			
				</div>
			
			</div>

		</div>


		</div>
	);
}

export default Home;

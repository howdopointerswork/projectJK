import {useEffect, useState} from "react";
import {useNavigate} from "react";
import React from "react";

function NavigationA(){

	return(
		<div>
		<nav style={{backgroundColor: "#01403c"}}>
			<ul style={{textDecoration: "none", display: "flex", fontSize: "3em", width: "100%", justifyContent: "center", alignItems: "center"}}> 
				<li><a style={{ margin: "0 3em" }} href="/home">Home</a></li>
				<li><a style={{margin: "0 3em"}} href="/exploreA">Explore</a></li>
				<li><a style={{margin: "0 3em"}} href="/discoverA">Discover</a></li>
				<li><a style={{margin: "0 3em"}} href="/learnA">Learn</a></li>
				<li><a style={{margin: "0 3em"}} href="/dashboard">Prototype B</a></li>
			</ul>

		</nav>
		</div>


	);


}

export default NavigationA;

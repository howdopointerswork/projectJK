import {useEffect, useState} from "react";
import {useNavigate} from "react";
import React from "react";

function NavigationA(){

	return(
		<div>
		<nav style={{backgroundColor: "#01403c"}}>
			<ul style={{textDecoration: "none", display: "flex", fontSize: "3em", width: "100%", justifyContent: "center", alignItems: "center"}}> 
				<li><a style={{ margin: "0 3em" }} href="/projectJK/home">Home</a></li>
				<li><a style={{margin: "0 3em"}} href="/projectJK/exploreA">Explore</a></li>
				<li><a style={{margin: "0 3em"}} href="/projectJK/discoverA">Discover</a></li>
				<li><a style={{margin: "0 3em"}} href="/projectJK/learnA">Learn</a></li>
				<li><a style={{margin: "0 3em"}} href="/projectJK/dashboard">Prototype B</a></li>
			</ul>

		</nav>
		</div>


	);


}

export default NavigationA;

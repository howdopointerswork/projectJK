import { useEffect, useState } from "react";
import React from "react";

import "../pages/styles/Navigation.css";


function Navigation(p1, p2, p3, p4, p5){

	

	return(
		<div>
			<ul style={{ fontSize: "2em", borderBottom: "2px solid white"}}> 
				<li><a href='/notifications'>Notifications <span style={{borderRadius: "10px", backgroundColor: "red", color: "white", fontSize: "1em", padding: "0.25em"}}>1</span></a></li>
			
				<li><a href='/account'>Account</a></li>
				<li><a href='/settings'>Settings</a></li>
		
				
			</ul>

		</div>

	);
}


export default Navigation;

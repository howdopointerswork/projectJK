import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import Logout from "../components/Logout";

function Dashboard(){

	const navigate = useNavigate();

	useEffect(() => {

		console.log("ID: ",localStorage.getItem("ID"));
		console.log("Username: ", localStorage.getItem("Username"));
	
		if(localStorage.getItem("ID") == 0 || localStorage.getItem("Username") == ""){
		
			navigate("/");
		}
	}, [navigate]);

	return(

		<div>
			<header><Logout /></header>


			<h1>Dashboard</h1>

		</div>


	);

}

export default Dashboard;

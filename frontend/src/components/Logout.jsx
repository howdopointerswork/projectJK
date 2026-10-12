import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function resetInfo(e){

//	e.preventDefault();
	console.log("resetting...");
	localStorage.setItem("ID",0);
	localStorage.setItem("Username","");
	localStorage.setItem("Email","");

	
}

function Logout(){
//set a timeout to log out
	
	return(
		<button onClick={(e) => resetInfo(e)}><a style={{ textDecoration: "none", color: "black" }} href="/">Logout</a></button>

	);

}

export default Logout;

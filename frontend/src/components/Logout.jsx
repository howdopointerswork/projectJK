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

	
	return(
		<button onClick={(e) => resetInfo(e)} style={{float: "right"}}><a href="/">Logout</a></button>

	);

}

export default Logout;

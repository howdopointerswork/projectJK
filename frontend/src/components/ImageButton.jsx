import { useEffect, useState } from "react";
import React from "react";


function ImageButton(name){
	
	const [path, setPath] = useState("");
	const fullPath = "/" + name.name + ".png";

	console.log("Name: ", name.name);

	return(
		
		<button onClick={(e) => localStorage.setItem("path", fullPath)}><img src={fullPath}/></button>
	);

}

export default ImageButton;

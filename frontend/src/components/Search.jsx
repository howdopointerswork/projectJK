import { useEffect, useState } from "react";
import React from "react";

import "../pages/styles/Search.css";

function Search(){

	const [query, setQuery] = useState("");

	let match = [];
	let users = [];

	const [results, setResults] = useState([]);
	const [type, setType] = useState("");

 	localStorage.setItem("selected", "");
	

	useEffect(() => {

		async function loadData(){
		
			const res = await fetch("http://localhost:3000/users");
		
			const data = await res.json();

		

			localStorage.setItem("Users", JSON.stringify(data));
			users = JSON.parse(localStorage.getItem("Users"));



			//console.log("Saved as: ",localStorage.getItem("Users"));
			
		
		}

		loadData();
	});


	function searchQuery(e){
		//get all users for now
		//get all everything else later
				
		e.preventDefault();

		if(query != ""){
			
			console.log("Searched: ", query);
			console.log("Selected: ", localStorage.getItem("selected"));
		}

		//temporary
		setQuery("");
		match = [];
	}


	

	function checkQuery(e){

		if(query == ""){
			match = [];
		}

		match = [];
		
	//	const users = JSON.parse(localStorage.getItem("Users"));

		console.log("Checking: ", e);
	
		if(users){
			for(const user of users){
			//	console.log("User: ", user);
				if(user.username.toLowerCase().includes(e.toLowerCase()) && e != ""){
					match.push(user);
					setType("User Profile");
				

				}else if(e != "" && match.length > 1){

					const removed = match.filter(val => !val.includes(e.toLowerCase()));
					setResults(removed);
				}
			}
			
		}

		console.log("Result size: ", match.length);
		setResults(match);
	}

	
	function setSelected(selected){

		console.log("Selected: ", selected);
	}




	return(

		//add filters
		<div style={{float: "left"}}>
			<form style={{  textAlign: "center"}}>
				<input type="search" value={query} onChange={(e) => {checkQuery(e.target.value); setQuery(e.target.value)}} placeholder="Search" style={{ fontSize: "2em", borderRadius: "10px" }} />
				<button style={{ fontSize: "1.5em" }} onClick={(e) => searchQuery(e)}>Search</button>
			</form>
			
		<div className="results" style={{ backgroundColor: "grey", position: "absolute", overflowY: "auto", height: "250px", width: "200px", margin: "0 auto", display: query == "" ? "none" : "block" }}>
			<ul className="displayResults" style={{ color: "black", textAlign: "center" }}>
				{results.map((result) => (
				
				

					<li  key={result.id} style={{ color: "black", padding: "0.5em" }}><a href={`/profile/${result.id}`} style={{ textDecoration: "none", color: "black", fontSize: "1.5em", width: "75%" }}>{result.username}</a> <p>{type}</p></li>


				
				))}
		
			</ul>
		</div>

		</div>

	);

}

export default Search;

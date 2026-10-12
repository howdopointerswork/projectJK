import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";

import Search from "../components/Search";
import Logout from "../components/Logout";
import ImageButton from "../components/ImageButton";

function ProfileA(){


	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [name, setName] = useState("Name");
	const [follow, setFollow] = useState(false); //whether you're following the current user
	const [show, setShow] = useState(false);
	const [path, setPath] = useState("none");	

	const [isUser, setIsUser] = useState(false);

	const picNames = ["green", "red", "blue"];

useEffect(() => {
	async function getUser(){



		const res = await fetch(`http://localhost:3000/id/${id}`)

		const data = await res.json();

		console.log("Data: ", data);
		console.log("ID: ",id);

		setUser(data);

		setName(data.user.username);

		console.log("Followers: ", data.user.followers.length);
		console.log("Following: ", data.user.following.length);

	//	setIsUser(localStorage.getItem("Username") === name);

		if(Number(id) == Number(localStorage.getItem("ID"))){

			console.log("This is you!");
			setIsUser(true);
		}else{

			setIsUser(false);
		}

			
		if(data.user){
			for(const follower of data.user.followers){
				console.log("follower: ",follower);
				if(Number(localStorage.getItem("ID")) == follower){
					console.log("You're following this user");
					setFollow(true);
				}else{
					console.log("Not following this user");
					setFollow(false);
				}
	
	
		}

		setPath(data.user.picturePath);
		console.log("Loading:",data.user.picturePath);
	}
		
	}

	getUser();

	


}, [id]);




	
async function addFollowing(e){
	
	e.preventDefault();
	if(!follow){
		const userID = Number(localStorage.getItem("ID"));
		console.log("Adding to following...");
	
		const resp = await fetch(`http://localhost:3000/user/following/${userID}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ 
				userID: id
			})
		});
	
		const data = await resp.json();
	}



}

async function addFollow(e){

	e.preventDefault();
	if(!follow){
		console.log("Adding as follower...");

		const userID = Number(localStorage.getItem("ID"));
		console.log("User ID is: ",userID);

		const resp = await fetch(`http://localhost:3000/user/followers/${id}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				userID: userID
			})

		});
		setFollow(true);	
		const data = await resp.json();
	}
}



async function unfollow(e){
	
	e.preventDefault();

	if(follow){
		console.log("Unfollowing...");	
		const userID = Number(localStorage.getItem("ID"));

		const resp = await fetch(`http://localhost:3000/users/unfollow/${id}`, {
			
			method: "PUT",
			headers: {
					"Content-Type": "application/json"
				},
		
			body: 
				JSON.stringify({
					userID: userID

				})
			

		})

		setFollow(false);	
		//check deletion here
		
	}

}



function showHide(e){

	e.preventDefault();

	setShow(!show);

	
}


function editProfile(e){
	
	e.preventDefault();

	console.log("editing profile");

}


async function changeImage(e){

	e.preventDefault();
	setPath(localStorage.getItem("path"));
	console.log("Updating image to: ", path);
	console.log("local is:",localStorage.getItem("path"));
	
	const lcl = localStorage.getItem("path");

	const resp = await fetch(`http://localhost:3000/users/image/${id}`, {

		method: "PUT",

		headers: {

			"Content-Type": "application/json"
		},

		body: 

			JSON.stringify({
				path: lcl
			})
		

		
	});

	const data = await resp.json();

}

/*useEffect(() => {
	async function getPath(){

	const resp = await fetch(`http://localhost:3000/user/image/${id}`);

	const data = await resp.json();

	console.log("Getting path: ",data.picturePath);
	
	setPath(data.picturePath);

		
}
	getPath();
}, [path]);*/

function testFunction(e){

	console.log("good!");
	console.log(localStorage.getItem("path"));

	setPath(localStorage.getItem("path"));
}


	//get user by id :)
	//also include return to search
if(localStorage.getItem('path') != ""){
	console.log("Path is: ",localStorage.getItem("path"));

}
	return(
		<div>
		<div style={{backgroundColor: "white", color: "black"}}>

				<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="/home" style={{ color: "white" }}>Return</a>
			
			<h1 style={{ color: "white", textAlign: "center", backgroundColor: "#01403c" }}>My Profile</h1>	
			<div style={{ display: "flex"}}>
				<img height="200px" width="200px" style={{ margin: "0 auto", textAlign: "center", border: "solid 4px black" }} src={"/camera.png"} />

			</div>
			<h2 style={{ color: "black", textAlign: "center" }}>User ID: {id}</h2>


		
			<button onClick={(e) => showHide(e)} style={{ margin: "0 auto", textAlign: "center", display: isUser ? "block" : "none" }}>{show ? "Hide" : "Change Picture"}</button>

			<div style={{ backgroundColor: "grey", textAlign: "center", margin: "0 auto", width: "fit-content", display: show ? "block" : "none" }}>
					<ul>
					{picNames.map((pic) => (
							<React.Fragment key={pic}>
							<li><a onClick={(e) => changeImage(e)}><ImageButton name={pic} /></a></li>
							</React.Fragment>	
							
					))}

					</ul>
				
			</div>

			<button onClick={(e) => editProfile(e)} style={{ margin: "0 auto", textAlign: "center", display: "flex" }}>Edit Profile</button>

			<div style={{color: "white", fontSize: "2em", backgroundColor: "#01403c"}}>	
			<ul style={{display: "flex"}}>
				<li>Followers: 6</li>
				<li>Following: 12</li>
				<li>Saved: 25</li>
				<li>Account Age: n days</li>
				
			</ul>
				</div>


			<details style={{fontSize: "2em", textAlign: "center", border: "solid 2px black"}}>
				<summary>Account</summary>
		

			
			</details>


			<details style={{fontSize: "2em", textAlign: "center", border: "solid 2px black", color: "white", backgroundColor: "#01403c"}}>
				<summary>Settings</summary>
		

			
			</details>


		<details style={{fontSize: "2em", textAlign: "center", border: "solid 2px black"}}>
				<summary>Inbox</summary>
		

			
			</details>


		<details style={{fontSize: "2em", textAlign: "center", border: "solid 2px black", color: "white", backgroundColor: "#01403c"}}>
			<summary>Saved</summary>
		</details>
		</div>


		</div>


	);
}


export default ProfileA;	

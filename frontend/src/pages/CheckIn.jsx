import {useNavigate} from "react";

import "./styles/CheckIn.css";
import Logout from "../components/Logout";
import Search from "../components/Search";


function CheckIn(){


	return(

		<div style={{color: "white", backgroundColor: "black"}}>
			<header style={{ float: "right" }}>
				<Search />
				<Logout />
			</header>
			<a href="#/dashboard" style={{ color: "white" }}>Return</a>
			<h1 style={{color: "white", textAlign: "center", borderBottom: "2px solid white"}}>Check-In</h1>

			<form className="survey" style={{textAlign: "center", margin: "0 auto", fontSize: "1em"}}>
			

				<div style={{border: "2px solid white"}}>
				<h1 style={{fontSize: "2em"}}>Question 1</h1>
				<p>What is your age?</p>	
				<input type="text" maxLength={2} inputMode="numeric"/>
			</div>



		<div style={{border: "2px solid white"}}>
		<h1 style={{fontSize: "2em", margin: "2em"}}>Question 2</h1>
				<p>What is your gender?</p>
				<ul>
				<li><label><input type="radio"/><span style={{color: "blue"}}>Male</span></label></li>
				<li><label><input type="radio"/><span style={{color: "red"}}>Female</span></label></li>
				<li><label><input type="radio"/>Other</label></li>
					</ul>


		</div>

		<div style={{border: "solid 2px white"}}>
		<h1 style={{fontSize: "2em"}}>Question 3</h1>
				<p>What is your Height?</p>
				<label style={{marginLeft: "0.5em"}} htmlFor="feet">Feet</label>
		
				<select name="feet">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
				</select>
				
				<label style={{marginLeft: "0.5em"}} htmlFor="inch">Inches</label>
				<select name="inch">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
				
				</select>


				</div>

				<div style={{border: "2px solid white"}}>

	<h1 style={{fontSize: "2em"}}>Question 4</h1>
				<p>What is your weight?</p>
				<input type="text" maxLength={3} inputMode="numeric"/>
		</div>

		<div style={{border: "solid 2px white"}}>
	<h1 style={{fontSize: "2em"}}>Question 5</h1>
				<p>What is your average daily caloric intake?</p>
				<input type="text" maxLength={5} inputMode="numeric"/>
		</div>

				<button style={{fontSize: "2em"}}>Submit</button>
			</form>
		</div>
	);
}

export default CheckIn;

export async function rowCount(){
		
		const userID = Number(localStorage.getItem("ID"));
		
	
		const resp = await fetch(`http://localhost:3000/transaction/count/${userID}`);

		const res = await resp.json();

		return res.count;	

	}



import "./Table.css";

import { useState } from "react";
import React from "react";




function Table( { headers, transactions, setTransactions, restore, setRestore } ){
	
	const ID = Number(localStorage.getItem("ID"));

	function formatLabel(value) {
		const text = String(value || "").trim();
		if (!text) {
			return "";
		}

		return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
	}

	const [editID, setEditID] = useState(0); 
	const [text, setText] = useState("Edit");

	const [newCategory, setNewCategory] = useState("");
	const [newType, setNewType] = useState("");
	const [newDescription, setNewDescription] = useState("");
	const [newAmount, setNewAmount] = useState(0);

	


	async function fetchData(){
		
		const res = await fetch(`http://localhost:3000/transaction/${ID}`);
		const data = await res.json();
	
		setTransactions(transactions);
		
	}

	async function updateTransaction(tID){
		console.log("Update here");
		console.log("TID: " + tID);

	/*	const removed = restore.filter(val => val.id !== tID);
		setRestore(removed);
		const removedT = transactions.filter(val => val.id !== tID);
		setTransactions(removedT);*/

			
		const transaction = {

			id: tID,
			amount: Number(newAmount),
			category: newCategory,
			description: newDescription,
			userId: Number(localStorage.getItem("ID")),
			type: newType,
			date: ""
		};
		
		const index = transactions.findIndex( (transaction) => transaction.id === tID);
		console.log("Size of rest:",restore.length);
		console.log("Rest contents:",restore);
		const rIndex = restore.findIndex( (rest) => rest.id === tID);
		transactions[index] = transaction;
		restore[rIndex] = transaction;

	
	//	restore.push(transaction);
	
	//	transactions.push(transaction);

		

		
	
		const resp = await fetch(`http://localhost:3000/transaction/${tID}`,
			{
				method: "PUT",
				headers: {
						"Content-Type": "application/json"
				},
				body: JSON.stringify({
					id: tID,
					amount: Number(newAmount),
					category: newCategory,
					type: newType,
					description: newDescription,
					userId: Number(localStorage.getItem("ID"))

				})


			
			});

			setEditID(0);
		}
	
	
	async function deleteTransaction(tID){
	
		console.log("Deleting " + tID);
		
		const removed = restore.filter(val => val.id !== tID);
		setRestore(removed);
		const removedT = transactions.filter(val => val.id !== tID);
		setTransactions(removedT);
	
		const resp = await fetch(`http://localhost:3000/transaction/${tID}`,
			{
				method: "DELETE",

				headers: {
					"Content-Type": "application/json"
				},

				body: JSON.stringify({
					id: tID,
					userId: Number(localStorage.getItem("ID"))
				})
			}

		);		

	}

	


	for(const transaction of transactions){

		if(transaction.amount == ""){
			transaction.amount = 0;
		}

		if(transaction.type == ""){
			transaction.type = "income";
		}

		if(transaction.category == ""){

			transaction.category = "housing";

		}

		if(transaction.date == ""){
			transaction.date = new Date();
		}
	}




	return(
		<div style={{ overflowX: "auto" }}>
		<table className="tableStyle">
			<thead>
			<tr>
			{headers.map((header) => (
				
					<th key={header}>{header}</th>	
				
			))}
			</tr>
			</thead>

			<tbody>

			{transactions.map((transaction) => (
				<React.Fragment key={transaction.id}>	
				<tr>
					<td>{transaction.id}</td>
					<td>{transaction.date.toString().slice(0,10)}<br/>{transaction.date.toString().slice(12,16)}</td>
					<td>{formatLabel(transaction.category)}</td>
					<td style={{ color: transaction.type == "income" ? "green" : "red" }}>{formatLabel(transaction.type)}</td>
					<td>{transaction.description}</td>
					<td>${transaction.amount}</td>
					<td><button className="table-action table-action-edit" onClick={() => {
						setEditID(transaction.id);
						setNewCategory(transaction.category || "housing");
						setNewType(transaction.type || "income");
						setNewDescription(transaction.description || "");
						setNewAmount(Number(transaction.amount) || 0);
					}}>Edit</button></td>
					<td><button className="table-action table-action-delete" onClick={() => deleteTransaction(transaction.id)}>Delete</button></td>
				</tr>
				
				{editID == transaction.id && (
				<tr className="edit-row">
					<td className="edit-spacer">#{transaction.id}</td>
					<td className="edit-spacer">{transaction.date.toString().slice(0,10)}</td>


				
					<td><select className="edit-control" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
										
						<option value="housing">Housing</option>

						<option value="food">Food</option>

						<option value="transportation">Transportation</option>

						<option value="health">Health</option>

						<option value="shopping">Shopping</option>

						<option value="entertainment">Entertainment</option>

						<option value="education">Education</option>

						<option value="finance">Finance</option>

						<option value="personal">Personal</option>

						<option value="travel">Travel</option>

						<option value="misc">Misc</option>
					</select>

					</td>



					<td>
						<select className="edit-control" value={newType} onChange={(e) => setNewType(e.target.value) }>	 	
						
							<option value="income">Income</option>
						
							<option value="expense">Expense</option>

						</select>

					</td>


					<td><textarea className="edit-control" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
</td>

					<td>
						<input className="edit-control" type="number" value={newAmount} onChange={(e) => setNewAmount(e.target.value)}/>	

					</td>
					
					<td>
						<button className="table-action table-action-cancel" onClick={() => setEditID(0)}>Cancel</button>
					</td>
				

					<td>
						<button className="table-action table-action-update" onClick={() => updateTransaction(transaction.id)}>Update</button>
					</td>
			
			


				</tr>

			)}

				
				</React.Fragment>
				
				
			))}

		
			</tbody>	

		</table>
		</div>

	);
}

export default Table;

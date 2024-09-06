function insert_Row() {
 
let table= document.getElementById('sampleTable')
	
let newRow=table.insertRow()
	
let cell1=newRow.insertCell()
	let cell2=newRow.insertCell()

	
cell1.innerHTML="New Cell1"
	cell2.innerHTML="New Cell2"
}
function insert_Row() {
 
let table= document.getElementById('sampleTable')
	
let newRow=table.insertRow()
	
let cell1=newRow.insertCell(0)
	let cell2=newRow.insertCell(1)

	
cell1.innerHTML="NewCell1"
	cell2.innerHTML="NewCell2"
}
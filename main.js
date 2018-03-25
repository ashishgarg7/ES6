let m, name1;
let addRow=() =>{
		let name = document.getElementById('name').value;
		let rollno = document.getElementById('rollno').value;
		let passyear = document.getElementById('passyear').value;
		let stream = document.getElementById('stream').value;
		
		if(name != "" && rollno != "" && passyear != "" && stream != ""){
			let t = document.getElementById('t01');
			let newRow = t.insertRow(t.rows.length);
			let chk = "<input type='checkbox'/>";
		
			let cel1 = newRow.insertCell(0);
			let cel2 = newRow.insertCell(1);
			let cel3 = newRow.insertCell(2);
			let cel4 = newRow.insertCell(3);
			let cel5 = newRow.insertCell(4);
		
			cel1.innerHTML = chk;
			cel2.innerHTML = name;
			cel3.innerHTML = rollno;
			cel4.innerHTML = passyear;
			cel5.innerHTML = stream;
		
			document.getElementById("f01").reset();
		}
		else{
			window.alert("Fields are EMPTY");	
		}
}

let delRow=()=>{
	let t = document.getElementById('t01');
	let x = t.rows.length;
	let i = 1;
	let flag = 0;
	while(x != 1 && i < x){
		let row = t.rows[i];
		let chkbox = row.cells[0].getElementsByTagName('input')[0];
		//console.log(row.cells[1].innerHTML);
		
		if(('checkbox' == chkbox.type) && (true == chkbox.checked)){
			flag = 1;
			t.deleteRow(i);
			x--;
		}
		else{
			i++;
		}
	}
	if(flag == 0){
		window.alert("select row to delete");
	}
}

let editRow=()=>
{
    let x = document.getElementById('t01');
    let rowCount = x.rows.length;
    let i = 1;
    let c = 0;
	let flag = 0;
    while(i < rowCount)
    {
        let row = x.rows[i];
        let chkbox = row.cells[0].getElementsByTagName('input')[0];
        if(('checkbox' == chkbox.type) && (true == chkbox.checked)) 
        {
			flag = 1;
            m = i;
            c++;
            i++;
        }
        else
        {
            i++;
        }
    }
	if(flag == 0){
		alert("Select 1 row to Update");
		document.getElementById("f01").reset();
	}
    else if(c > 1)
    {
        alert("You cannot update more than one row at a time");
    }
    else
    {
        let row1 = x.rows[m];
        name1 = row1.cells[1].innerHTML;
        let roll1 = row1.cells[2].innerHTML;
        let pass1 = row1.cells[3].innerHTML;
        let stream1 = row1.cells[4].innerHTML;
        document.getElementById('name').value = name1;
        document.getElementById('rollno').value = roll1;
        document.getElementById('passyear').value = pass1;
        document.getElementById('stream').value = stream1;
    }
}

let updateRow=()=>{
	let t = document.getElementById('t01');
	row = t.rows[m];
	let name = document.getElementById('name').value;
	if(name1 == name){
		alert("Change the fields");
	}
	else{
	let chk1 = "<input type='checkbox'>";
	row.cells[0].innerHTML = chk1;
	row.cells[1].innerHTML = document.getElementById('name').value;
	row.cells[2].innerHTML = document.getElementById('rollno').value;
	row.cells[3].innerHTML = document.getElementById('passyear').value;
	row.cells[4].innerHTML = document.getElementById('stream').value;
	}
}

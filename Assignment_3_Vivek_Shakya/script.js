var btnCounter = 0;
function addRow(){
    var tableRef = document.getElementById("awardsTable");

    var newRow = tableRef.insertRow(tableRef.rows.length);// add new data
    var newRo2 = tableRef.insertRow(tableRef.rows.length);// add description row
    newRo2.style.display = "none";

    var desc_cell = newRo2.insertCell(0)// insert cell in description row
    desc_cell.colSpan = 9;
    var paragraphElement = document.createElement("p");

    

    // add cell content into description row
    paragraphElement.innerHTML = "Advisor1: <br/><br/>Award Details:<br/> Summer 1-2014(TA)<br/>Budget Number<br/>Tuition Number<br/><br/>Comments:<br/>";
    desc_cell.appendChild(paragraphElement);

    var columnCount = tableRef.rows[0].cells.length;

    var cell0 = newRow.insertCell(0); //insert 1st cell in data row

    //create img element inside 1st cell
    var imgElement = document.createElement("img");
    imgElement.src = "down-arrow.png";
    imgElement.id = "toggle";
    imgElement.width = 20;
    imgElement.height = 20;
    
    //document.getElementById("toggle")

    
   // cell0.appendChild(elm0);

    //var cell1 = newRow.insertCell(1);
    
    //create checkbox element inside 1st cell of data row
    var checkBoxElement = document.createElement("input");
    checkBoxElement.type = "checkbox";
    checkBoxElement.id = "row_select";
    checkBoxElement.style.display = "block";

    
    
   
    cell0.appendChild(checkBoxElement);
    cell0.appendChild(imgElement);
   /* document.getElementById("row_select").onclick = function(){

        if(document.getElementById("row_select").checked){

        }

    }*/
    
    //elm.onclick = row_highlight();
    
    // for loop to insert dummy cells after the 1st cell is inserted in the data row
    var student = ["","Student_1","Advisor_1","Approved","2","TA","5000","85"]
    for(var i=1 ; i<columnCount-1;i++)
    {
        var newCell = newRow.insertCell(i);
       
        var newText = document.createTextNode(student[i]);
        newCell.appendChild(newText);
        
        
       
    }

    // insert cell at index 8(position 9) to add the delete button , which is initially hidden
    var cell9 = newRow.insertCell(8);
    var delBtn = document.createElement("input");
    delBtn.type = "button";
    delBtn.name= "delete";
    delBtn.value = "delete";
    cell9.className = "hide";  // add classname hide to hide the delete button
    cell9.appendChild(delBtn);

    // add event on checkbox element to highlight the row
    checkBoxElement.addEventListener('click',function()
    {
        row_highlight(this);
        /*if(document.getElementById("row_select").checked){
            
            document.getElementById("row_select").parentNode.parentNode.style.backgroundColor = "green";
        }
        else{
            
            document.getElementById("row_select").parentNode.parentNode.style.backgroundColor = "white";
        }*/

    });

    // add event on down-arrow image to expand the description row
    imgElement.addEventListener('click',function(){
         rowExpand(this);
         
    });

    // add event on delete button in data row
    delBtn.addEventListener('click', function(){
        delete_Row(this);
    });

   /* var cell_ten = newRow.insertCell(9);
    cell_ten.appendChild(document.createTextNode("hello"));*/
}

// function to expand and collapse the description row on clicking the down-arrow image 
function rowExpand(obj){
    
    //var tableRef = document.getElementById("awardsTable").getElementsByTagName("tbody")[0];
    var row = obj.parentNode.parentNode;
    var rowidx = row.sectionRowIndex;
    var tbody = row.parentNode;
    
    

    
    var hidden_row = tbody.rows[rowidx+1];
    if(hidden_row.style.display == "table-row"){
        hidden_row.setAttribute("style","display:none;")
    
       }else{
        hidden_row.setAttribute("style","display:table-row;")
       }   

 }


// function to highlight the data row on click of the checkbox
function row_highlight(checkboxElem) 
{
    var row = checkboxElem.parentNode.parentNode;
    
    //alert(row.cells[8].childNodes);
    
    if (checkboxElem.checked) {
       
      row.classList.add("active");
      row.cells[8].classList.add("show");
      row.cells[8].classList.remove("hide");  
      
      
        enableBtn();
        btnCounter++;
        
      
     
      
      
    } 
    else {
        
        row.classList.remove("active");
        row.cells[8].classList.remove("show");
        row.cells[8].classList.add("hide");
        
        
        //row.deleteCell(9);
            btnCounter--;
              disableBtn();   
    }
   
}

// finction to disable submit button
function disableBtn() 
{
   
    if(btnCounter == 0){
        document.getElementById("submit_awards").disabled = true;
        document.getElementById("submit_awards").classList.remove("enable");
    
    }  
   

    
    
}

//function to enable submit button
function enableBtn() 
{
    document.getElementById("submit_awards").disabled = false;
    
    document.getElementById("submit_awards").classList.add("enable");
    
    
}


// function to delete data row and description row on click of delete button
function delete_Row(currentRow) {
    var row = currentRow.parentNode.parentNode;

    var i = row.rowIndex;
    var tableRef = document.getElementById("awardsTable");

   
    //var tbody = row.parentNode;
    
    tableRef.deleteRow(i);
    tableRef.deleteRow(i);
    btnCounter--;
    if(btnCounter==0){
        disableBtn();
    }
   
}
function submit_awards(){
    alert("Selected Awards submitted Successfully");
}

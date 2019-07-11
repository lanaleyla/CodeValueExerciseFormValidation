//Define size of the table
let rows=30;     //number of rows in the table
let cols=40;     //number of columns in the table
let timerIdGame; //in use to clear setTimeOut
let flag=0;      //game stoped? 0-no, 1-yes
let tableGame;   //table of the animation

tableCreate();   //create the table view

//Add event listeners to the cells of the table-change color on clicked cells of the table
let ArrayTable=document.querySelectorAll("td");
for(i=0;i<ArrayTable.length;i++)
{
    ArrayTable[i].style.backgroundColor="";
    ArrayTable[i].addEventListener("click", changeColor);
}

//Manage conoway's game of life-counting neighbours and checking the rules
function conowaysGame(event)
{
    tableGame=document.querySelector("tbody");
    let neighbours=0;
    var matrix = [];   //matrix that holds the next step view
    flag=0;

    for(var i=0; i<rows; i++){ //initialize matrix
         matrix[i] = new Array(cols);
        }

    for(i=0;i<rows;i++) //iterate the table game
    {
     for(j=0;j<cols;j++)
     {
        neighbours=countNeighbours(i,j,tableGame); //get neighbours number
        console.log(neighbours);

        /*check game rules*/
        if(tableGame.rows[i].cells[j].style.backgroundColor==="rgb(111, 195, 252)") //if cell is alive
        {
            if(neighbours>3)                          //die over population                     
            {    matrix[i][j]=0;}
            else if(neighbours===2 || neighbours===3) //stay alive
            {    matrix[i][j]=1;}
            else if(neighbours<2)                     //die of lonleyness
            {    matrix[i][j]=0;}
        } 
        else if(tableGame.rows[i].cells[j].style.backgroundColor==="") //if cell is dead
        {
            if(neighbours===3)      //come to life
             {   matrix[i][j]=1;}
        }
        neighbours=0; 
        }
    }
    updateTableGame(matrix);  //update the table game view with the next step (matrix)
    if(flag===0) //check that game have not stopped
         timerIdGame=setTimeout(conowaysGame,100); //call function again
    else{
        clearTimeout(timerIdGame);
    }
}

//Create a table 
function tableCreate() {
    var body = document.getElementById("tableWrap");
    var tbl = document.createElement("table");
    tbl.style.width = "100%";
    
    var tbdy = document.createElement("tbody");
    for (var i = 0; i < rows; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j <cols; j++) {
          var td = document.createElement("td");
          tr.appendChild(td)
        }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}

//update the game table according to the next steps
function updateTableGame(nextStep)
{
    for(i=0;i<rows;i++){
        for(j=0;j<cols;j++){
           if(nextStep[i][j]===1){ 
               tableGame.rows[i].cells[j].style.backgroundColor="rgb(111, 195, 252)";}
           else{
                tableGame.rows[i].cells[j].style.backgroundColor="";}
        } 
    }
}

//Change the color of the cell on "click" event
function changeColor(event)
{
    const x=event.target;
    event.target.style.backgroundColor="rgb(111, 195, 252)";
}

//Stop the setTimeOut call
function stopGame()
{
    clearTimeout(timerIdGame);
    flag=1;
}

//Clear all cells
function clearTable()
{
    for(i=0;i<ArrayTable.length;i++)
    {
        ArrayTable[i].style.backgroundColor="";
    }
    clearTimeout(timerIdGame);
    flag=0;
}
 
//count the neighbours
function countNeighbours(R,C,Tbl)
{
    let count=0;
    if(R>0 && R<(rows-1) && C>0 && C<(cols-1)) {//cell is inside bounderies
        if(Tbl.rows[R].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
          count=count+1;
        }
        if(Tbl.rows[R].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
          count=count+1;
        }
        if(Tbl.rows[R+1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
          count=count+1;
        }
        if(Tbl.rows[R+1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
          count=count+1;
        }
        if(Tbl.rows[R+1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
          count=count+1;
        }
        if(Tbl.rows[R-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
          count=count+1;
        }
        if(Tbl.rows[R-1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
          count=count+1;
        }
        if(Tbl.rows[R-1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
          count=count+1;
        }
    }
    
    if(R===0 && C===0){ //cell is upper left
        if(Tbl.rows[R].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }

    }

    if(R===0 && C===cols-1){ //cell is upper right
        if(Tbl.rows[R].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
    }

    if(R===rows-1 && C===cols-1){ //cell is buttom right
       
        if(Tbl.rows[R].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
    }

    if(R===rows-1 && C===0){ //cell is buttom left
        if(Tbl.rows[R].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        

    }

    if(R===0 && C>0 && C<(cols-1)){ //cell is on the first row
        if(Tbl.rows[R].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[rows-1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }

    }

    if(R>0 && R<(rows-1) && C===cols-1){ //cell is on the last right column
        if(Tbl.rows[R-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            if(R===3 && C===9)console.log("right");
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            if(R===3 && C===9)console.log("right");
            count=count+1;
        }
        if(Tbl.rows[R].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            if(R===3 && C===9)console.log("right");
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            if(R===3 && C===9)console.log("right");
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            if(R===3 && C===9)console.log("right");
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            if(R===3 && C===9)console.log("right");
            count=count+1;
        }
        if(Tbl.rows[R].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            if(R===3 && C===9)console.log("right");
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[0].style.backgroundColor==="rgb(111, 195, 252)")
        {
            if(R===3 && C===9)console.log("right");
            count=count+1;
        }

    }

    if(R===(rows-1) && C>0 && C<(cols-1)){  //cell is on the buttom row
        if(Tbl.rows[R].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[C-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[0].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
    }

    if(C===0 && R>0 && R<(rows-1)){ //cell is on the first left column
        if(Tbl.rows[R-1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[C+1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R-1].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
        if(Tbl.rows[R+1].cells[cols-1].style.backgroundColor==="rgb(111, 195, 252)")
        {
            count=count+1;
        }
    }

    return count;
}

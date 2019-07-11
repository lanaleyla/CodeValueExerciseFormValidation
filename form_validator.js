  
function MyValidate() {
const name = document.getElementById("FullName").value;
const address=document.getElementById("Address").value;

    if(name.length < 5){
        alert("Name must be at least 5 characters long");
        }
    if(address.length > 10){
        alert("Address must not be more than 10 characters long");
    }
       
}
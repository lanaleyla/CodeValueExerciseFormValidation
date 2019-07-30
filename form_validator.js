  
function MyValidate() {

const name = getNameInputText();
const address=getAddressInputText();

    if(name.length < 5){
        alert("Name must be at least 5 characters long");
        }
    if(address.length > 10){
        alert("Address must not be more than 10 characters long");
    }
       
}

//get full name and validate
function getNameInputText()
{
    let name=document.querySelector("#FullName").value;
    if(name!==null)
    return name;
}

 //get address and validate
function getAddressInputText()
{
    let address=document.querySelector("#Address").value;
    if(address!==null)
    return address;
}
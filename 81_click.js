/* the use of the function is basically for the making the events to UI(User Interface) as for this uses we mostly use the combination 
of the javascript and html. so lets make the small of the 2D game by using the html and js*/
let counter=0;/* this is need to inetiliaze outside of the function because if we do inside the funcion then the counter or the click 
that will be trigger inside of the function will be again reset and start from the first thats why we need to initialize that outside of
function*/
let name=null;
const clicktest=()=>{
    counter++
    document.getElementById("valuecount").innerHTML=counter
}
const getname=()=>{
    name=prompt("Enter your name:");
document.getElementById("name").innerHTML=name
}
getname()
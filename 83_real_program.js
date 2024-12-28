/* write a program to list the number of counts for a user
senario
when a user browse the web, and first clicks the button
you should ask the user to input name
after entering the name the click button should be changed to start button
after the first click the timer should be set for 5 sec
show the list of the users who have clicked for how many times within that 5 sec*/
let name=null;
let counter=0;
const getname=()=>{
setTime(()=>{
counter++
},5000)
    document.getElementById("countvalue").innerHTML=counter
}
const username=()=>{
    setTime(name=prompt("Please input the username:"),2000)
    document.getElementById("user").innerHTML=name
}
username();
console.log("bikash");

let Count = 0;
let name = null;
let usertable=[];
const populatedTable=()=>{
    let htmlTable="";
    let j=0;
    usertable.map((item)=>{
    htmlTable+="<tr>"
    htmlTable+="<td>"+(++j)+"</td>";
    htmlTable+="<td>"+item.name+"</td>";
    htmlTable+="<td>"+item.Count+"</td>";
    htmlTable+="</tr>"
})
document.getElementById("data").innerHTML=htmlTable
}
const startcounter=()=>{
if (Count===0){
    setTimeout(() => {
   
    usertable.push({
        name:name,
        Count:Count
    })
    populatedTable();

       name=null;
       Count=0;
       document.getElementById("click_text").innerHTML="click here" 
    },5000);
 
}
Count++;
}
const startprogram = () => {
  if (!name) {
    name = prompt("please enter the name");
    document.getElementById("click_me").innerHTML = "start";
  }else{
    startcounter()
  }
};

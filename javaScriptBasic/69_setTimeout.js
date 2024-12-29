/*
as if we want to delay the function call then we use the setTimeout function 
as the set time fuction will be set  inside the body of the function and as it will be declear inside the body and and the parameter 
or the parentsisi of the setTimeout function will be set as by ==> first value will be executin and the second will be the time for the 
execution of the function
as 1000 = 1 milisecond measure 
as 2000 = 2 milisecond    lets summerize with code block of this example*/

const call1=()=> {
   setTimeout(function() {console.log("this is the call1")
   
    
   }, 2000)   
}

const call2=()=> {
    setTimeout(function()
     {console.log("this is the call2")
     }, 1000);
    
}
call1()
call2()
/* what is use of promise function in js?
==> As we know promise is the function where we pass the argument as the function and this promise function hold only one parameter 
that is call back function but inisde parameter of the call back function we can pass argument again 
so as resulting the call back function that will give the either resolved or reject,not more then this*/
let mypromise=new Promise((resolved,reject)=>{
    //the out put of this function will be err or success
    // at first delay
    resolved()
    // success
    reject()
    //failur
    // the given of the code block after here will be not not execution 
})

// summery of the promise function
// as while we promise to some one then there will be fullfillment of that promise will be 50/50 
// same like when we pass inside promse  inside the call back function as the parameter as resolved or reject then it will give either 
// resolved(success) or rejected(failur) not more then this, is basically the main defination of the promise function in file system of 
// js
/* while the developer willing to build the login page as if the user name and password is correct then it will go inside the page 
and  if doesnt match then it will give error or the execution will be terminated as the false.*/

const login=(username,password)=> {
    return  new Promise((res,rej)=>{
        let exist=false
        if(exist){
            res("You can loggged in...")
        }
        else{
            rej("you are not logged in....")
        }
    })
    
}
login("","")
let result=login
console.log(result);
/* there are three stages of promise they are 
1. pending stages ==> here the promise will go through execution and after it will return and the return are called as 
   fullfill and rejection.

   as in the above code we never handeled the promise so they are called as pending stage 
2. fullfill or reject // this is the second stage of the promise as after the execution either the return is fullfill or reject
3. settlement ==> this is the third stages of the promise **/

/*as we can make the array of the promise, so for handel that type of array of promise we need to use all and allSettled function
*/
let login=((username,password)=>{
    return new Promise((res,rej)=>{
        let exist=true
        if(res){
            res("this is logged in....")
        }else{
            rej("this is not logged in.....")
        }
    })
})
login("","")
.then((res)=>{
    // console.log("success",res);
    
}
)
.catch((rej)=>{
    // console.log("err",rej);
    
})
// lets make new promises as
let mypromise=Promise.resolve("hello there")
let mypromise1=Promise.reject("err:hello there")
// now we can handel all this promise by collecting all of promise in 1 array 
let new_promise=login("","")
 let array_of_promise=[new_promise,mypromise,mypromise1]
Promise.all(array_of_promise)
.then((res)=>{
    console.log(res);
    
})
.catch((rej)=>{
    console.log(rej);
    
})
/* while we together handel the promise in array by using "all", if all the promises are successful, only "then(resolve)" will execute
 but if one of them are failure then it will execute "catch(rejected".
 as above case we can see only one of them are failur that means while we using "all" it execute.catch)
 as "all" will need to execute "then" when all the promises must need to be setteled  
 
 real use of "all" is ===>>
      when we got data sheet in excel by holing with different promises ,like 10 promises data
      so for this we need to use "ALL" as if all of data are executable ,neither we want any of the data rejected.
 */
 Promise.allSettled(array_of_promise)
 .then((res)=>{
    console.log(res);
    
 })
 .catch((rej)=>{
    console.log(rej);
    
 })
 // as when we use the "satteled", all of will be executed by giving proper status or definatio, as fullfilled or rejected with value
 //  doesnt matter promise are fullfilled or rejected
 /*      real use of "allSettled" ====>
                                      while importing data quiery by assiging that query in promise  as if we need both success and
                                     failur query (adi malai j aye pani matlab na huney vayo vaney ) we can use "allSettled"
        we dont need to use catch because the execution promise is always in success as where ever if it got promises that execute 
        failure will also execute by giving proper status and reason of failure
        so mostly we use this type of promise handiling process to filter out the code that are giving failure*/




        /*summery of asynchrous call
        what is asynchrous call?
        ==> if we want to execution of the code block parallely, as multiple of calling function at one time ,then depending upon their
        processing of time ,first processed code will execut firstly and then slowly processed will follow the other one.

        as in any function if we return any function as the promise then it will success or failure , if the given argument of the function 
        will exist or not , as the promise will give success or failure. Now to handel the promise we use ".then()",to hold the success 
        and ".catch()" to hold the failur.now some time if there is independent of two function then we can use the ".finally()" 
        as it is always executable.
        as we know that we can make the array of the promises and if we need all the settled or success only promises then we can use 
        "promise.all()" and if we need either any success or faulure promises then we can use "promise.allSettled()". 
        as promise.allSettled will be using mostly because it hold all the promise,either of any are failur , as failure will give the 
        status(fullfilled or rejected) with proper reason. as this is also helps us to filter the rejected code block */
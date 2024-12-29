/* to handel the promise we need to use then and catch function but as same as them we can use the another it called as the try and 
catch where for this we can use the same as the if and else space as return and throw where return can hold as the successful and the 
throw as the unsuccessful.  as the try also hold the successfull and the and catch can hold the promise as th*/
let mypromise1=async()=>{
    let exist=true;
    if(exist){
        return "i am ressolved"// return for here in the async function is always of the success or ressolved result 
    }throw " i am rejected"// throw in the async is always of the giving of the rejected function.
}
let promiseHandle=async()=>
{
    // this can await any function if the function is giving of the promise as the return for any.
    try {
        let result=await mypromise1();// await must be inside of the async function 
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}
promiseHandle()// VVIP this must be of the return for the awaited function. 
console.log("this is testing of the conflict resolution");

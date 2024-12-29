let login1 = (username, password) => {
  return new Promise((res, rej) => {
    if (res) {
      res("I am ressolved");
    } else {
      rej("I am reject");
    }
  });
};
login1("", "")
  .then((ressolved) => {
    console.log(ressolved);
  })
  .catch((reject) => {
    console.log(reject);
  });

/* now this function we can call by using async wait function as when we want to use the await function 
the await calling function need to be the sub part of the function where the return must be promise function or the async 
function("this is happen if the function is returning the promise function") and if we add the "async" before the argument that we 
passing the function then this will shows that the function is async function as the keyword "async" will tell the return function is
promise.

so above all the function we can just merzed in the small  as shown in the following 
As in the space of if and else we can use the 
==> to hold ressolved or success we can use the 'return' 
==> to hold the reject or unsuccessful we can use the "throw" keyword
same like the "then" and "catch" we can handle the promise as
now everytime there should not success or failue as it can show some time the error as if there we assume as the false then this time 
it shows that promise is not handeled. so for that if there is also false time to hold the promise we can use the concept of "try" and
"catch"
they are always inside the body part of the function call of the promise function
try===>it always hold the ressolve or success promise.
catch==> it always hold the rejcected or unsuccessful promise of the async function.
while we handeling the async function we need to assaign that value of the function in the new variabl as it must be followed by keyword 
await*/
/*let us use the example of the async await function by using the return and throw as the if and else control function and later the 
 promise is also handel by the try and catch function.*/
 const Mypromise = async() => {
    let y=false
    if(y){
        return "i am ressolved"
    }else{
        throw "i am rejected"
    }
 }
 let handlepromise=async()=>{
    try{
        let result=await Mypromise()
        console.log(result);
        
    }catch(err){
        console.error(err);
        
    }
 }
  handlepromise()
let promise15=async()=>{
  let existss=false
  if(existss){
    return"i am ressolveddddd"
  }throw "i am rejected"
  
}
let handlenewpromise=async()=>{
try{
  let ended=await promise15()
  console.log(ended);
  
}catch(err){
console.log(err);
}
}
handlenewpromise()

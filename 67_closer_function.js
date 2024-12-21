/**
what is clouser function?
==>>if the function is defined inside the function is called as the clouser function and Allows access to an outer function’s scope from 
an inner function.
 */
function callone() {
  console.log("i am in call one ");
  function calltwo() {
    console.log("i am in call two");

  }
  return calltwo// this is the syntex that the first function need to hold the return value 
}

callone()
calltwo()
// this type of the function need to call as to maintain the relation between first function and the second function


const fun=()=>{
	const fun1= ()=>{
  console.log("hello fun 1")
     const fun2= ()=>{
      console.log("hello fun 2")
     }
     return fun2()
    }
      
      return  fun1()
}
fun()

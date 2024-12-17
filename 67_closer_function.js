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

let calltwo =callone()
calltwo()
// this type of the function need to call as to maintain the relation between first function and the second function
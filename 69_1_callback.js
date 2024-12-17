callback(
/*if i send some function as the argument of the function is called as the call back function*/
)/*/*A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.
 A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when 
 the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.
 
==>suppose if the asynchrous function we calliing as function1 and function2 and both function are we need because of the 
inter relation of them and if the function2 will be exection before the function1 as if the function2 first  execution results the errror as 
then that time we use the    "callback function"   */


let function1() // this is the asynchrous function
let function2()  // this is also asynchrous function
// the call back function will be as follows 
==>> function1{function1}

function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote;
  callback(myQuote); // 2
}

function logQuote(quote){
  console.log(quote);
}

createQuote("eat your vegetables!", logQuote); // 1

// Result in console: 
// Like I always say, eat your vegetables!
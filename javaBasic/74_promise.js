/*
mainly we use call back function while to handle the asynchrous functions as for delay the time for the execution of the code as mostly
we cannot use the setTime function 
so in js while we working on the file system of js there is packages in node.js that is called as File System which help to create the 
delay functions 
what is fs in the js?
The Node.js File System (fs) module provides a suite of file operations that allow developers to read from, write to, and manipulate
 the file system. It's a core module that provides an API for interacting with the file system in a manner closely modeled after 
 standard POSIX functions.

*/
function login(
  username,
  password,
  cb /*....aftet login we need to give the user some feed back*/
) {
  /*the login logic will be 
    success 
    failur

    as the login logic we can expect either failur or success but it is not possible that in the same time we cannot expect two once*/
  cb(true);
  cb(false);
  cb(/*..pending)*/);
  cb(); // as if we called the function as many time then we can call the function as many times
}
console.log("i am called");

login("username", "password", (err, success) => {
  if (err) {
    console.log("error:", err);
  } else {
    console.log("success:", success);
  }
});
// as for this kind of asynchrous function we need to handle by usimg the call back function or it can be handel by using promise function


/*summery of what is promise function?
this is also use as the call back function that are also using in the liberay of the file system of the node js to pass the another 
function inside the promise function to hande the asynchrous function for the execution of the delaying the code in the program

generally call back function are not using mostly for handeling the asynchrous function 
as we use promise function to handle the asynchrous function 
*/

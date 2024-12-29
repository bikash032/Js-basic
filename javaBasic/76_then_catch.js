// /* .then() and .catch() are the function that can handel the promise function where .then() holds first argument of the promise function
// that is resolved and .catch() can  hold the reject argument of promise function that is rejected as lets see through example*/
// let login=(username,password)=>{//here used the username and password we can use for calling data from api or backend
//     return new Promise((res,rej) =>{
//         let exist=true
//         if(exist){
//             res("this is the logged....")
//         }else{
//             rej("this is not logged...")
//         }
//     })
// }
// login("","")/* as this is just return of the login functin but not holding the result of the promise function so
//              to handel the return of the promise function we can use .then() and .catch() function */
// // after here we create the form first (form1)
// // after we can write here as the code block for the cheking the username and password as they are inside our data or not
// // and if above all the syntex can able to search the data inside as it will now call the API
// // so now we can create the loading variable after the compliation of calling the date from backend
//  let loading=true//   here we initialize the loading process after calling data from backend
// login("","")// here we cannot use any colon as .then() and .catc() are the one line statement for holding the data
// .then(
//     (resolve)=>{
//         console.log(resolve)

//     }
// )
// .catch(
//     (reject)=>{
//         console.log(reject);

//     }
// )
// // as then and catch take only one parameter as they are called as the call back parameter
// .finally(()=>{
//   loading=false// this will help for the ending of the handiling of the promise
// })
// // as finally also take as the parameter as callback but the argument inside the call back will be empty
// // this finally will be execute every time
// // when we need to use the .finally()

// /*main reason for making .finally()is to stop the loading or to finally handle the promise it is because when we calling api either there
// will be data that will help for resolved or reject but after this also the process is still loading . so when we make inside the finally
// as the loading as false then the process will stop.
// so because of this .finally() is also called as the last of the handling of the promise.
//  */

// /*many function have got only return value as resolved or only return as the reject , so at this this time we can call only one
// handling type of promise */
// // let myPromise=login("","")
// // .then((resolve)=>{
// //     console.log("success:",resolve);

// // })
// let mypromise=Promise.resolve("hello there")
// let mypromise1=Promise.reject("error:hello there")
// mypromise.then((res)=>{
//     console.log(res)

// })
// mypromise1.catch((rej)=>{
//     console.log(rej);

// })
// // if we declear the promise and cannot handle that promise then it will throw error or warning by saying that is not handled
// // for example if we coment out mypromise1.catch then it will throw the error

let loading = true;
let login = (UserName, passw) => {
  return new Promise((resolve, reject) => {
    let exist = false;
    if (exist) {
      resolve("You are logged in.........");
    } else {
      reject("You are not logged in..............");
    }
  });
};
login("", "")
  .then((resolve) => {
    // console.log("you are logged in.");
  })
  .catch((reject) => {
    // console.log("you are not logged in.");
  })
  .finally((loading = false));
// creating of the pool of the promises

let promise1 = Promise.resolve("hello this is the promise 1 ressolved");
let promise2 = Promise.reject(
  "hello there this is of the promise 2 as rejeected"
);
let promiseList = [login("", ""), promise1, promise2];
console.log(promiseList);
Promise.all(promiseList)
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((reject) => {
    console.log(reject);
  });


  Promise.allSettled(promiseList).then((ressolved)=>{
    console.log(ressolved);
    
  }).catch((reject)=>{
    console.log(reject);
    
  })
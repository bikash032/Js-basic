const Mypromise = async () => {
  let x = false;
  if (x) {
    return "i am ressolved";
  } else {
    throw "i am rejected";
  }
};
// let handlepromise = async () => {
//   try {
//     let result = await Mypromise();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// handlepromise();
/* this is the only process of the handle of the promise if there is no any data are found while triggering the promise as this is 
also called as the handeling the unhandled the promise that is moslty not handle by the then and catch.


now again this handle process will be implemented to the chain block of the handeling the different promises as like the nesting of the 
then and catch of the handling of the promises */
const Mypromise1 = () => {
  let y = true;
  if (y) {
    return "I am ressoved of promise1";
  } else {
    throw " I am  rejected of promise1";
  }
};
let handlepromise1 = async () => {
  try {
    let result1 = await Mypromise1();
    console.log(result1);
    let result2 = await Mypromise();
    console.log(result2);
  } catch (err) {
    console.log(err);
  }
};
handlepromise1();
/* as we can see here that there is multiple of the promises as either success or unsuccecssful 
we can use try and catch to handle the promise as if we are not able to hold the promise also it will shows that reason that if 
there is error also*/

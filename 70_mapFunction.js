// what is map function?
// is  mainly use to iteratation of the value of the array for the key of the object. 
/*when ever if we want to use the loop inside every element of the array then we can use the function that called as the map function
the map function will take one paramerter that is called as the call back function.
 lets work with example*/
// the argumment for the using of the map function will be taking always of the call back of the funciton 
// syntex are ==>> if there is the name of array==> users and hold multiple of the  element then we can run loop for every element of
// array as
let users=[
    {
    name:"bikash",
    address:"kathmandu",
    email:"user1@gmail.com",
    contact:9706607843
    },
    {
        name:"ashok",
        address:"lalitpur",
        email:"user2@gmail.com",
        contact:987654321
    },
    {
        name:"suraz",
        address:"bhaktapur",
        email:"user3@gmail.com",
        contact:987654321
    }
]
let UserName=users.map(user=>(user.name))
console.log(UserName);

// it will throw the error if we do not hold the return value of the map function
/* as we are using the map function in the iteration or to run loop in the array of object inside the function by the returning in the
value inside the curley braces(definaton of the function) but while we working in the react, the map function will  be also wait for 
the return value as the curley braces will throw warning for the return value need in the react so for that we use the small bracket
() not {} while giving the 
defination part of the map function in the .*/
// users.map(function(users,index) (
//     console.log();
//     ))// this syntex that are uses in the react only by using the small bracketf

// console.log(userCal l); 


const userAddress=users.map(userss=>(userss.address)   

)
console.log(userAddress);
return 0;//this type of the return value we need to be specify while we working with the react. as if we dont return the value then it 
// give you the warning while execution of this code 
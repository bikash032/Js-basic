/*
******SHIFT AND POP OPERATION FOR ARRAY
let first_element=array.shift() is used to take out the first element or data from the array  as opposite of the unshift
                        is used to store data on the first place of array

let last_element= array.pop() is used to take out the last element or data from the array as it is also as the opposite of
                        push operator that is used to add the data on the last position of the array.

*/

let array=[];
let product1={
    name:"Iphone15",
    price:250000,
    store:"Tamrakar complex"
}
let product2={
    name:"Samsung S22",
    price:200000,
    store:"salima complex"
}
let product3={
    name:"Oneplus 9",
    price:180000,
    store:"Hamro complex"
}
array.push(product1,product2,product3)
// console.log(array);
let first_element=array.shift();// this will take out the fist element of the array 
console.log(first_element);
console.log(array);

//now if we need to take out n-1 object or data from the array then we can use the POP operator
let last_element=array.pop();
console.log(last_element);
console.log(array);



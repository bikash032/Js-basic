/**************************** OBJECT FOR JAVA SCRIPT**************
  1. As we know that object is the instant of the class so object must be associated always with the class 
  2. object can store any data types 
  3. object is always inside of the curley braces 
  4. they are always in the position of the key value pairs 
  5. key values pairs are always seperated by the semicolon
  6. 
 
let us discuss why do we need to use the object inside of the array
===>> as we know that witout the object(key:value pair we doesnt know that what is data inside of the array)
so for this to be cleared we need to assaign that in the form of key value pair which make us to be cleared that we can know that specified

*/
// at first lets compare the array and object data types 
let products=[
    "Iphone16",
    "Apple",
    10,
    25,
    250000
]
// now we can see here we cannot identify what the data is here. so to be identified easily we can use the object data concept
let product_1={
    name:"iphone16",
    brand: "apple",
    discount: 10,
    stock: 25,
    price:250000
}
// now here we can clearfy as the all of the data that we used here now it will be easy to accessiable too 
// let me calculate the after discounted value 
let after_discount=product_1.price-(product_1.price*product_1.discount)/100
// console.log(after_discount);// here we can calculate the after discount price of the product 


// lets assign this value inside of the object

// object.key=value this is the syntex for the assigining of the key value inside of the object 
product_1.after_discount=after_discount
console.log(product_1);

// now if we need to delete any data from the object then we can use the delete keyword
delete product_1.brand

// console.log(product_1);\


// if we need to take out only key from the object then we can use
let key=Object.keys(product_1);  // this will return the array of the keys 
console.log(key);

// if we want to take out only the values from the object then
let values=Object.values(product_1); // this will also return the array of the values 
console.log(values);



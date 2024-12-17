let a = 10;
console.log(a);// ===> 10 
{
    let a = 20
    console.log(a);// ==> 20
}
{
    let a = 40;
    console.log(a)//  ==> 40
}
console.log(a); // ==> 10
// here we can see that let inside the block value doesnt change the value of a ouside the block i.e 20
// The process here inside is that when we use console inside the block it execcute inside defined value 
// but lets see using the var krywords
// var a = 10;
// console.log(a);// ==> 10
// {
//     var a = 20;
//     console.log(a)// ==> 20
// }
// {
//     var a = 30;
//     console.log(a)// ==> 30
// }
// console.log(a)// ===> 30 this is the value that is not changable after passing through the block
// so we use var also for the block inside to minimige the storage capacity.


/**summary
 * let ====>
 * 1. As if the vlaue for the let is decleared then it will not effect to the block scope value but we can use change the value
 * 2. inside of the block scope value and the value will be set same outside of the block scope. 
 * 3. for declearing the name for the let we need to check the case sensetive 
 * 4. we can use console.log(let name) not inside the inverted name 
 * var ===>
 * 1. As if the Var is decleared top and we used the block scope then the value will change thoug
 * 2. var doesnt matter about the block scope .
 * 3. if the var value is changed inside the block scope then the value will be changed outside of the block scope.
 * 4. var is hoisted to the top of the block scope but will be changed later.
CONSTANT :
1. we cannot change the value of the constant.
2. we can declare the constant using let and const keyword.
3. we cannot change the value anywhere but if we need to change the data type then we can do it.
*/

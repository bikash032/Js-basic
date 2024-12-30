/* When we want to achive OOP in Java script then we can use two methods as
1. class based program
2. Prototype 


lets discuss about first
 PROTOTYPE 
   There are two types of the protoyping
   a. Data prototyping ==> pre-modeling of the syructure before the production 
   b. Project prototyping ==>Creating an early version of a system, product, or project to test ideas and gather feedback

   Basically we are using of the data prototyping 
    while we working on the javascript we are using of the function 

*/
function User(){
    // let name="bikash" // if we assign like this in the function then it is not of the class data type.
this.name=""// this is the pre-defined keyword that are used for the pointing and assigining of the value as the key value 
                            // as the key:value or can say as the object for the class.
this.email=""
}
let objUser= new User() // this is used to make the object for the class. without of the instance of the class(object) we can not access the data
objUser.name="Bikash Bishokarma"
objUser.email="bishokarma1996@gmail.com"// this process is called as the instanciaing of the class.
// as we can assign the value inside of the object by pointing into of the key from the instance 
console.log(objUser);


// *********** Assign function insde of the prototype program **********

User.prototype.getName=function(){

return this.name
}
console.log(objUser.getName());

// what is constructor function?
//==> this is of the function insde of function based or the class based funtion which are execution firstly befrore of the other execution
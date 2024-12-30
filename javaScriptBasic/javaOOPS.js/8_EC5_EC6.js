/*
THE verson that we are using for the structuring of the code as two verson of  ECMAscript(javascript)
1. Es5   and  2.Es6

let us discuss about the basic concept that are used for the both verson of the ecma. To maintin the code maintainalibility we follow the standards
of the ecmascript verson as Es5 and Es6. 
The main difference between both of them are how do we use both of them for the export and import of the code from one file to anther file
as the node function.
As this is used for the any portion while we using liberay for the javascript.
 


Es5====>>
        To import the file form the same of the file system 
    */
   class User{
    name;
    email;
    address
    constructor(_name,_email, _address){
        this.name=_name
        this.email=_email
        this.address=_address
    }
   }
const ObjUser= new User();


// now for this file to be export for the another file we need to do



// for the Es5 to export the file for the another file then we can use the keyword called as the mode
module.exports= User;// This will works only for application for the node as this will not works for the normal uses unless of the node application
   

//IMPORT file for Es5
// FOR THE NEXT FILE IF WE WANT TO IMPORT THE FILE THAT WE EXPORTED FROM HERE THEN WE CAN DO
const User=require("./8_EC5_EC6")// for here we do not need to pass .js and if we import from the same directory file then we can use (./file_dir)
                                // but if we need to import from the another file directory then we can use(../file_dir)


// For the Es6 we can export for two ways as 
// defult export : when we want to export the file from the directory in the Es6 we can do


export default User;// this we can export one time as for the defult export and 
// if we want to export the specific name then we can
export class User1{//this is of the named export from the current file 
    name;
    email;
    address
    constructor(_name,_email, _address){
        this.name=_name
        this.email=_email
        this.address=_address
    }
   }
const ObjUser1= new User();




// Now to recive the specific file location for Es6 
import class_name from "./file_dir" // this is for the defult class

// for the named class we can do 
import {class_name} from "./file_dir"// this is for the named class to receive in the another file


/************** VVIP *****************
 * We need to use the receiving of the pattern depending upon how and what kind they use for the exporting of the file
 * We cannot use the importing of Es5 and Exporting of the Es6. As it must be need to be in the same verson 
 * we dont mix the pattern of the exporting and importing 
 * 
 * 
 * 
 * 
 * 
 * 
 * we can use arrow function 
 */
const function1=()=>"test" // this is also declearation and "test" will be return of the function
const function2=()=>{
    return "test";// this is of the normal return of the function
}
 const function3=()=>("test")// if we uses parenthissi for the return return of the function then also it is called as the return as like 
                            // for the normal function

 // above all of the function are of the same.


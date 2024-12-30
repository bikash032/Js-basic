


/* what is inheritance of the OOP?
===> This is of the simple the reusability of the code for the further uses 
   *Child and parent are there classes 
    * In JS we are using of the only multi- Level inheritance.
    * one parent have multiple child classes but not multiple inheritance as only one child have one parent
    * 

*/
class User{
    name;
    address;
    email; 
    role;
    getName=()=>{
      return this.name
        
    }
}
class Admin extends User{
    role="admin";
    constructor(_name){
        super()
            this.name=_name
            
    }
}
const objadmin= new Admin("adminuser")
console.log(objadmin.getName())

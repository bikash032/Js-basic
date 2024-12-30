class User{
    constructor(){
            console.log("i am constructer for class");
            
    }
}

class  person extends User{
    // constructor(parameters) {
    //    super()
    //    console.log("i am from the person");
        
    // }
}
let per =new person()
// WHAT IS CONSTRUCTOR OVERRIDING?
//===> IF there is constructor function within of the parent class and threre is no constructor function whithin inside of child class but we 
//      make the instance(object) of the child class only ,then the there is execution of the parent class constructor function. is called as 
//      overridding of the constructor function.
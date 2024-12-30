/*
WHAT IS STATIC FUNCTION OF THE JAVASCRIPT?
==> A static function in the javascript is a method that belongs to a class itself rather than an instance of the class. This means that static
    function are called on the class, not on the objects created from the class.
    
    KEY points 
    1. Belongings of the class
        use of the perdefined keyword as "static"
    2. No access of "this"
    3. static function is useable for the utility function, helper method , or the logical
          that doesnt depend on an instance of the class.
    
    */

class catagory{
name;
price;
brand;
constructor(_name,_price,_brand){
    this.name=_name
    this.price=_price
    this.brand=_brand     // constructor function no need to return for the function
}
static getname(){
    console.log("I am for the static function");
    
}
}
const objCatagoty= new catagory("Mobile",123000,"Samsung")
console.log(objCatagoty);
// objCatagoty.getname() // we cannot call static function by using of the object based because of the static behaviour it is not refer as function
                          // as static function is not object based function as it is of the class based only. ca

                          catagory.getname();// so for this we need to call function based on the class based approach.


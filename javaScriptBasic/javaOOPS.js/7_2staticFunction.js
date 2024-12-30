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


          class Catogory{
            name;
            price; 
            product;
            constructor(_name){
                    this.name=_name
                    
          }
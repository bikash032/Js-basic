/* WHAT IS OF THE FUNCTION OVERRIDDING ?
===> if the structure,name and passes of parameter for both parent and chil class are similar and used of the normal function(not arrow function)
     then that time the properties of the function of the parent class are accessiable to child class along with the properties added from
     the function of child class is called as the overriding of the function in OOP of any langauges.
     
     To perform that task any one of the class must need to have the constructor which helps for
     the initilization of the class.
     */

class Car {
    
  name;
  brand;
  colour;
  price;
constructor(_price){
    this.price=_price
}
  getprice() {
    return this.price;
}
  }
class Merchedies extends Car {
    getprice() {
    
    console.log(super.getprice());
  }
}
const objmerchedis = new Merchedies(120000000);
objmerchedis.getprice()

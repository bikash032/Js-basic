

// This is of the best practice for the standard code writing although the concept from the prototype is also execution as the same.
// 
class User{
    name="";
    email="";
}
const userObj= new User(); // if we never make the object then that class will be non executable 
userObj.name="Bikash Bishokarma"
userObj.email="bishokarma1996@gmail.com"
console.log(userObj);


// constructor

class Car{
    colour="";
    brand="";
    price="";
    constructor(_colour,_brand,_price){  // as this is of the function which is always executable without the calling of them from outside of the block scope 
                    // as this is predefined universal function that is assigning inside of the object 
                    // but will not executable if we dont make the instance also called as the object 


this.colour=_colour
this.brand=_brand
this.price=_price

// console.log(bmw);


    }
    reinitiliazation(_brand1,_colour1,_price1){
    this.colour=_brand1
    this.brand=_brand1
    this.price=_price1

    }

}
const bmw =new Car("bmw","black",15000000);// this is important as we need to create the object for the proper execution of the class and the function that are 
                    // described as the before.
                    console.log(bmw);
bmw.reinitiliazation("merchedies","white",50000000)
                    console.log(bmw);


// this is of the format for the properties that are to be execution from the class then we can use for the concept of the constructor
// it is because this is used to the executon firstly 

class Car1 {
    reinitialize(colour, brand, price) {
        this.colour = colour;
        this.brand = brand;
        this.price = price;
        
    }
    constructor(colour, brand, price) {
        this.colour = colour;
        this.brand = brand;
        this.price = price;
    }
    

    // Method to update properties after creation

}

const bmc = new Car1("red", "Toyota", 10000); // Constructor runs
console.log(bmc); // { colour: 'red', brand: 'Toyota', price: 10000 }

bmc.reinitialize("black", "BMW", 15000000); // Update properties
console.log(bmc); // { colour: 'black', brand: 'BMW', price: 15000000 }



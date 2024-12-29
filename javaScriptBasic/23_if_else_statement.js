/**
 if else used to give either value is true or false we cannot give any decisionon middle 
  THIS WILL GIVE THE BOOLEAN VALUE RESULT i.e true or false
  ELSE WILL STORE ALL THE FALSEY VALUE LIKE ==> false, null, 0, undefined, "",empty variable,undeclear variable.
  so this type of output condition will be stored in else 

  if will store all the value opposite to else 
  like ==> true, nut null, not 0 ,defined, not "", not empty variable, declear variable 
 */


/*
CREATE TWO VARIABLES 
Marks obtained and percentage 
as total marks is 500
>=80 distinction
>=60 first division
>=45 second division
>=35 first division
<35 fail
*/
let marks_obtained = 450;
let percentage = (marks_obtained / 500) * 100;
if(percentage>=80){
    console.log("Distinction");
}else{
    if(percentage>=60){
        console.log("first division");
        
    }
    else{
        if(percentage>=45){
            console.log("second division");
            
        }else{
            if(percentage>=35){
            console.log("third division");
            
            }else{
                if(percentage<35){
                    console.log("you are fail");
                    
                }
            }

        }
    }
}


// logical use of if else statement

let products ={
    name:"iphone",
    price: 123000,
    discount: null,

}
 let after_discount =products.price-products.discount*products.price/100
if(products.discount){
  

    console.log("actual_price:",after_discount);
  
}
console.log("original price:",products.price);

// else{
//     console.log("product_price:",products.after_discount= products.price)// this will execute because if we never give discount then 
//                                                                        //the price must be original price 
// }
/* if we want to execute only else then we can define on if place about the condition of else
for eg !(product.discount) the print the original price 

we can make plenty of if else statement inside either if or else 

*/
if(expression){
    if(expression1){
        if(expression2){
            if(expression3){
                if(expression4){
                    if(expression5){
                        if(expression6){
                            if(expression7){
                                //THIS IS CALLED NESTING BUT THIS MAKES PROGRAM SLOW 
                                //EXAMPLE GIVEN BY SANDESH TEACHER ABOUT E-KANTIPUR
                            }
                        }
                    }
                }
            }
        }
    }
}
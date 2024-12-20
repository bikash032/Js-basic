/**
 
           **************     OPERATOR IN JAVASCRIPT        *************
        A. arthematics operator
             +,-,/,* ,%
        B. Increment and decrement operator
         if we need to change value by 1

        c. Assignment operator
        ==, +=, -=, /=, *= 

        d. string concatination operator 
        if we need to add two or more string values then we can use the concatination operator

        e. Comparision operator
        ===, <=, >=, !=, ==, >, <
        as the comparison will be between numbers, strings or other 


        f. Logical operator
        &&  ==> AND
        //  ==> OR
        !   ==> NOT 

        g. Conditional or ternary operator
        This is of the one line IF ELSE statement  
       (expression)? "TRUE":"FALSE"

       h. spread operator
       in the iteriable data types like json, array, object if we need to copy same key value pair in the next array or object or json
       then we can use spread operator(...). if we see any three dot then we can say that it is of the spread operator 

 */

        //increasement and decreasement operator
let a=10;
a++;
console.log(a);// the value will be 11 here
++a;
console.log(a);// will be 12
console.log(a++);// will be 12 *** post assign    
console.log(++a);// will be 14  ** post assign after operation  *** aghadi if ++ ayo vaney then it will first increase and later will be printed



            // assignment operator 
let b=b+1 // lekhnu ra
b+=1 // lekhnu same ho 
// the process behind here is first it will add 1 with b and later it will assign to the b again.



           // string contcatination operator
let name="Bikash";
let surname="Bishokarma";
// if we need to print this name together with gap then we can use 
console.log(name + " " + surname); // Bikash Bishokarma
// now let us use the assignment operator here
console.log(name+=" "+surname);// both of them are same process of the concatination
 // and this logic goes for all of the assignment operator like -=, /=, *= etc.

         //COMPARISION operator
let x=10;// number 
let y="10";// string data type
// for this contex we can say the value are same as 10 but data types are not same one is number and another is string 
// if we add these two then 
let z=x+y; // 1010 result
// it is because the symbol + is used for the concatination operator so it will concatinate string and number data type
let d=x-y; // 0 
let e=x*y; // 100 and other operator will be also same as this except +

console.log(x==y);// this will tell us true because this is comaprision between value
console.log(x===y);// this will tell us false because it will comapre between value and also of the data type 


// now if want to make that reverse for that then we can use not!
console.log(x!=y);// this will tell us false because with not 10 is not equal to 10 that means false
console.log(x!==y);// this will tell true because it decler that the value or data type is not equals to x and y 

 console.log(x<y);// this will return false because 
 
 
            // LOGICAL OPERATOR
// If we need all the value supposed to be true then we can use && operator
let k= 1000;
let l= 200;
let m=1000;
if (k==m && k==l){
    console.log("true")   
    
}
else{
    console.log("the values are not same");    
}
// if we need any one of the value are true and we need the true 
if (k==m || k==l){
    console.log("this is checking of the or operation");
    
}else{
    console.log("this is wrong");
    
}

// not function is usally used to make the true to false and false to true


// let us take example of the previousy while if the data validation
Array.include();// this is telling that if the value is present in the array then take that image to backend 
!Array.include(); // shows that if the value is not inside array then also you can include that image 


       // conditional or ternary operator 
let data=null;
console.log((data)?"true":"false");// this will tell that if the data is not empty then print true if not print false

                                // result is false because data have no value 

let gender=data?data:null; // this is telling that if the data need to assign for the gender then assign the data if not assign null
// or we can write this statement like this
let happy=data??null; // this is also telling that if the data is not empty then assign the data if not assign null
// true || default condition of the uses 



        // spread operator 
    let main_catogary={
        name:"Cosmetics",
        line:4,
        supplier:"xyz company"
    }

    let data_record={
        ...main_catogary,  // this will bring all of the data from the main_catagory and assign here
        brand:"sunsilk",   // this can be done any index or position of the array or object of the class
        price: 100,
        quantay:20,

    }
    console.log(data_record);
    
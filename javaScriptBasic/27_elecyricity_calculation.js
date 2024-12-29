/**
 ********* ELECTRICITY BILL CALCULATION*************
 TOTAL UNIT consumed= 150;
 for 0-50 unit = Rs 80
 next 20 unit = Rs 5/unit
 next 30 unit = Rs 8/unit
 remaining = Rs 10/unit

 calculate total price for the 150 unit consumed for the costumer
 */

 let total_unit;
 let total_price=0;
let price;
 if(total_unit=50){

    price=80
    total_price+=price
 }
if(total_unit+=20){
    price=20*5;
    total_price+=price
}
if(total_unit+=30){
    price=30*8;
    total_price+=price
}
if (total_unit=150-total_unit) {
    price=total_unit*10
    total_price+=price
}
console.log(total_price);


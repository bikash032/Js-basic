/**
CALCULATION OF THE TAX 
IF a person annual income is 10000000 and the tax bracket are
0-500000=1%
next 500000= 15%
next 700000= 20%
next 900000= 30%
above 900000 = 35%
depending upon this bracket pleaase calculate the total tax
 */

let total_tax=0;
let tax;
let taxable_amount;
if(taxable_amount=500000){
    tax=(taxable_amount*1)/100
    total_tax+=tax;
}

if(taxable_amount+=500000){

tax=(500000*15)/100
total_tax+=tax    
}
if(taxable_amount+=700000){
    tax=(700000*20)/100
    total_tax+=tax
}
if(taxable_amount+=900000){
    tax=(900000*30)/100
    total_tax+=tax
}
if(taxable_amount=10000000-taxable_amount){
    tax=(taxable_amount*35)/100
    total_tax+=tax
}
console.log(total_tax);




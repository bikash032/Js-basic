let product = [
  (product1 = {
    Name: "Apple",
    price: 250,
    discount: 10,
  }),
  (product2 = {
    Name: "Orange",
    price: 150,
    discount: 20,
  }),
  (product1 = {
    Name: "Mango",
    price: 350,
    discount: 10,
  }),
  (product1 = {
    Name: "Guava",
    price: 250,
    discount: 15,
  }),
];
let new_product=Object.values(product)
console.log(new_product);
let htmlTable="";
let j=1;
let after_discount;
for(let i in new_product){
    let prod=new_product[i]
    prod.after_discount=prod.price-(prod.price*prod.discount)/100
    htmlTable+= `<tbody><td>${j++}</td>
    <td>${prod.Name}</td>
    <td>${prod.price}</td>
    <td>${prod.discount}</td>
    <td>${prod.after_discount}</td></tr>`
}
document.getElementById("tbody").innerHTML=htmlTable;
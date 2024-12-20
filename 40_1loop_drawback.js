//if we are assiging loop in the same structure object with repreasenting the indexing , and if there are empty slot over there then 
// that type of program that time it will throw an error 
let item=[
    {
        name:"shampoo",
        price: 500,
        discount:10
    },

    {
        name:"soap",
        price: 100,
        discount:15
    },
    {
        name:"body spray",
        price: 300,
        discount:10
    },
    
]
item[5]={
    name:"body spray",
    price: 300,
    discount:10
}
console.log(item);// this will show the two empty slot in the array

    for( i=0;i<item.length;i++){
        let prod=item[i]// as this is pointing that if there prod inside the item then run this loop 
        if(prod){
    item[i].after_discounted=item[i].price-(item[i].price*item[i].discount)/100
    }}
    console.log(item);
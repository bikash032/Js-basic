/* question no 1 
make the product array where we pasing the different key and  value pair so now the thing is that we need to calculate the after discount 
and need to assign them in each object by using the map and forEach function */

let products=[
    {
        name:"APPLE",
        price:130000,
        discount:10
    },
    {
        name:"samsung",
        price:125000,
        discount:10
    },
    {
        name:"xiaomi",
        price:120000,
        discount:10
    }
]
products.map(function (prod,index) {
    let after_discount=prod.price-prod.price*prod.discount/100
    prod.after_discount=after_discount
})
console.log(products);

  
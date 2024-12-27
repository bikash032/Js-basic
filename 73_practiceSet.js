/* question no 1 
make the product array where we pasing the different key and  value pair so now the thing is that we need to calculate the after discount 
and need to assign them in each object by using the map and forEach function */

// let products=[
//     {
//         name:"APPLE",
//         price:130000,
//         discount:10
//     },
//     {
//         name:"samsung",
//         price:125000,
//         discount:10
//     },
//     {
//         name:"xiaomi",
//         price:120000,
//         discount:10
//     }
// ]
// products.map(function (prod,index) {
//     let after_discount=prod.price-prod.price*prod.discount/100
//     prod.after_discount=after_discount
// })
// console.log(products);

  let cosmetic=[
    {
        name:"Nivea",
        price:2000,
        discount:15
    },
    {
        name:"johnsons",
        price:2000,
        discount:25
    },
    {
        name:"colgate",
        price:150,
        discount:10
    }
  ]
  
 cosmetic.map((prod,index)=>{
     let after_discounted=(prod.price-(prod.price*prod.discount)/100)
      prod.after_discounted=after_discounted
    })
   
    //   console.log(after_discounted);
console.log(cosmetic);

  let groccery=[
    {
        name:"cooking oil",
        price:1250,
        discount:15
    },
    {
        name:"rice",
        price:2550,
        discount:13
    },
    {
        name:"pulses",
        price:2000,
        discount:25
    }
  ]
  groccery.forEach((new_grocerry,index)=>{
    let after_alldiscount=new_grocerry.price-(new_grocerry.price-new_grocerry.price*new_grocerry.discount)/100
    return new_grocerry.after_alldiscount=after_alldiscount
  })
  console.log(groccery);
  
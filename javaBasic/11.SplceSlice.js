/*  SPLICE OPERATOR 
IF we want to take out or retrive the elament from the array then we can use the splice function
@@@ this is done by 
let delete=product.splice(1,2) 1==> this is the index of array
                                2==> this is the number of the element that must need to delete from that index(HOW MANY)

key note: this function will takeout or delete from the array and the psition or indexing will be later making normal.
THIS IS ALSO USES AS THE DELETE FUCTION(DELETE FUNCTION WILL LWAVE THE EMPTY SLOT BUT SPLICE WILL NOT LIVE THE EMPTY SLOT)

****SLICE OPERATOR*****
this is also as like the splice to delete the value inside the array but will not change the data structurre of the array
let product_chunk=product.slice(2,4)  2==> index of the array from where to rretrive data
                                      4==> also index of position
                        both combines as the data taking from where to where. in this case the retriving from the 2 index starting until
                        4 index 
                        that means total of 2 elements are taking out 
                            
*/
let array=[];
let product1={
    name:"Iphone15",
    price:250000,
    store:"Tamrakar complex"
}
let product2={
    name:"Samsung S22",
    price:200000,
    store:"salima complex"
}
let product3={
    name:"Oneplus 9",
    price:180000,
    store:"Hamro complex"
}
array.push(product1,product2,product3)
console.log(array);
// let new_delete=array.splice(1,2)
// console.log(new_delete);
// console.log(array);
let another_delete=array.slice(1,1)
console.log(another_delete);





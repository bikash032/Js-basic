/* to handel the promise we need to use then and catch function but as same as them we can use the another it called as the try and 
catch where for this we can use the same as the if and else space as return and throw where return can hold as the successful and the 
throw as the unsuccessful.  as the try also hold the successfull and the and catch can hold the promise as th*/
const username=()=>{
    return new Promise((res,rej)=>{
        let exist=true;
        if(res){
            res("this is loading")
        }else{
            rej("this is not loading")
        }
    })
}
username("","")
.then((rej))
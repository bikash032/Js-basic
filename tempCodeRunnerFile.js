const fun=()=>{
	const fun1= ()=>{
  console.log("hello fun 1")
     const fun2= ()=>{
      console.log("hello fun 2")
     }
     return fun2()
    }
      
      return  fun1()
}
fun()
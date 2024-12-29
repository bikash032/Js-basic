// forEach function will also same as the map function as the map function will need the return but the function forEach will not 
// want the return and the all syntex, parameter(users,index) are also same as the map function 

let users=[
    {
    name:"bikash",
    address:"kathmandu",
    email:"user1@gmail.com",
    contact:9706607843
    },
    {
        name:"ashok",
        address:"lalitpur",
        email:"user2@gmail.com",
        contact:987654321
    },
    {
        name:"suraz",
        address:"bhaktapur",
        email:"user3@gmail.com",
        contact:987654321
    }
]
users.forEach(function(users,index){
console.log(users.name);

})


/*
****************different between map and forEach function*********************
WHILE WE WORKING ON THE CASE OF REACR IF WE NEED TO RETURN THE VALUE THEN WE CAN USE OF THE MAP function and 
IF WE DO NOT NEED TO RETURN THE VALUE THEN WE CAN USE OF THE forEach function. 
this is only differencce between the map and forEach function

as the iteration of the 

*/
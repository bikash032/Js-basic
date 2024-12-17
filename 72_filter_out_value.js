

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
                address:"kathmandu",
                email:"user3@gmail.com",
                contact:987654321
                }
                ]
                
                /* filter out the function  ==>
            if we want to filter out the element inside the array value that consist of the same value 
                
                or if we want to seperate out the object that consist of the same value
                then we can use the given
                 logica as below*/
                 let userKtm=[]
               users.map(function(users,index) {
                if (users.address==="kathmandu")
                    userKtm.push(users)
               })
               console.log({ktm:userKtm});
               

               let costName=[]
               users.map(function (users,index) {
                if(users.name==="bikash"){
                    costName.push(users)
                }
               })
            //    console.log({bikash:costName})


               // but this kind of the block code can be executed by the single line statement lets  see

            let userKtmm=users.filter(function (users,index) {users.address==="kathmandu"})// this is the most important syntex for the
            //    console.log({happy:userKtm});                                              // takeout the similar object takeout
               
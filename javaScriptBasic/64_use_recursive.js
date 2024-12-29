let catogories = [
    {
        name: "cat name",
        children: [
            {
                name: "child cat",                               // this is the seneraio of daraz that catogary inside catagory
                children: [                                      // and again catagory inside catogary.
                    {
                        name: "child child cat",
                        children: [
                            {
                                namea: "child child child cat",
                                children
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
// now for this case if we need to acccess all the name of inside this array then we can use recursive function.
for (let cat of catogories) {
    console.log(cat.name);
    if (cat.children) {
        for (let child1 of cat.children) {
            console.log(child1.name);

        }

    }
}


let catogories1 = [
    {
        name: "cat name",
        children: [
            {
                name: "child cat",
                children: [
                    {
                        name: "child child cat",
                        children: [
                            {
                                name: "child child child cat",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

function rec(data) {
  for (let cat of data) {
    console.log(cat.name);
    if (cat.children) {
      rec(cat.children);
    }
  }
}

rec(catogories1);

// this will we can access the value of the each catogary nested name.





// AS THE RECURSION FUNCTION WILL HELP TO MAKE SHORT THE MULTIPLE CODE.w
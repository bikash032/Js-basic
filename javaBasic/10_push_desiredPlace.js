/*
$$$$   Put object in the desired place we can follow the rules as below
1. first find out the size of the array or the total number of the position(size=array.length )
2. now push this in the array
students_information[size]=student_1


*/

let student_information = [];
let students = [
    [1, 2, 3, 4, 5, 6, 7],
    ["bikash", 
        "udayapur",
        "NEPAL",
        97066907843,
        "bishokarma1996@gmail.com"]]
let student_detail_1 = [
    "RAM",
    "sarlahi",
    "nepal",
    9842852699,
    "sarlahi112@gmail.com"
]
let student_1 = {
    name: "bikash bishokarma",
    age: 29,
    sex: "MALE",
    adress: "udayapur",
    contact: 9706607843,
    email: "bishokarma1996@gmail.com",
    isEmployed: true
}
let student_3 = {
    name: "sandesh",
    age: 25,
    sex: "male",
    adress: "butwal",
    contact: 908765432,
    isEmployed: true
}
student_information.push(student_3,student_1 )
size=student_information.length
// console.log(student_information);
student_information[size]=student_detail_1
// console.log(student_information);

/*this will insert data in the array at the last position but we can put inside as desigered position by making the empty slot
for example if we inserted manually at the 4 index of the array then 3 index will be empty and later we can assign there the object
*/
let my_detail={
    name:"Prakash Mahat",
    address: "Baglung",
    phone: 9784514211
}

student_information[4]=my_detail
console.log(student_information);



/*      ******************** IMAGES VALIDATION FOR THE BACKEND OR FRONTEND *******************
sometime we need to upload the image file on our application 
there are diffrent types of the format of picture that the browser sent to for the backend 
they are standard validiting for the browser are as following extension only;
           1. jpg
           2. png
           3. jpeg
           4. gif
           5. svg
           6. bmp
           7. webp


now all of these are the extension of the file for the images 
May be the client will give diffrent types of the file type so first we need to follow all these steps

1. file uploaded images
2. file validation
3. standard types
           1. jpg
           2. png
           3. jpeg
           4. gif
           5. svg
           6. bmp
           7. webp
*/
let filename="filename.jpg";
// now for this file we need to validate first it will be uploadable or not 
// to make sure we need to first pass by the following render:
// we need to split that filename into small portion as
let splits="f.i.l.e.n.a.m.e.jpg"


 splits=splits.split(".")// this is the function to split file into and give values in array format ***************************
// now we need to hold the extension in one file


let extension=splits.pop();// this will take out the extension from the array of the file 

console.log(extension);
// after extracting of the file from the array we need to validate either this is in the format for the suitable for the backend 

let allowed=["jpg","png","jpeg","gif","svg","bmp","webp"]
// allowed.includes(extension.toLowerCase())// we can do two types of the operation they are hay stack and needle stack {paralko mutha and tendro}
// here the includes functiion will give the boolean return as true or false 
// includes can hold for the two types of the data types as in hay or needle of the data
// now this will check that if the values is inside of the allowed function then it will show true and if doesnt match then 
// it will show the false as the boolean data type 

// as we know that include function is of the case sensetive function and if there is upper case in any of the extension then it will 
// not read that extension. so to overcome this we need to pass again that extension through the function called as the toLowerCase()
allowed.includes(extension.toLowerCase())// this will change any cases of the data extension into the lower case format as it is 
                                        // make the uniformality of the data extension that will be readable into standard data extension format

console.log(extension.includes(extension.toLowerCase()));





function validateFileExtension(fileName) {
    const allowedExtensions = ["jpg", "png", "jpeg", "gif", "svg", "bmp", "webp"];
    const extension = fileName.split(".").pop().toLowerCase(); // Extract and convert to lowercase
    return allowedExtensions.includes(extension); // Check if it's in the allowed list
}

// Example usage
const fileName = "f.i.l.e.n.a.m.e.jPg";
console.log(validateFileExtension(fileName)); // true or false
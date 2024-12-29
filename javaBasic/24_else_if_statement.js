/* ELSE IF STATEMENT
as if we use the multiple times of the else if statement then it will form nested of else if which makes the program running so
slow so to overcome this we can use else if statement 
same as the previous scanerio lets implement that 
*/
let marks_obtained = 100;
let total_marks = 500;
let percentage = (marks_obtained / total_marks) * 100;
if (percentage >= 90) {
  console.log("distinction");
} else if (percentage >= 60) {
  console.log("first division");
} else if (percentage >= 45) {
  console.log("second division");
} else if (percentage >= 35) {
  console.log("third division");
} else if (percentage < 35) {
  console.log("sorry you are failed");
}

//  ************* checking day*****************
// saturday-sunday= holiday
//monday - thrusday = workday
// friday= weekend

let day = "sunday";
if (day === "friday") {
  console.log("weekend");
} else if (day === "saturday" || day === "sunday") {
  console.log("holiday");
} else {
  console.log("workday");
}

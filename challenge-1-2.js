let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = (massMark / (heightMark * heightMark));
let BMIJohn = (massJohn / (heightJohn * heightJohn));

console.log("mark BMI = " + BMIMark);
console.log("john BMI = " + BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log("Is mark BMI higher than john " + markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
} lcc

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI ${BMIMark}is higher than John's ${BMIJohn}!")
} else {
    console.log("John's BMI ${BMIJohn}is higher than Mark's! ${BMIMark}")
}
var Age = document.getElementById("Age").value;
var Salary = document.getElementById("Salary").value;
var Place = document.getElementById("Place").value;
var Children = document.getElementById("Children").value;

console.log(Age);
console.log(Salary);
console.log(Place);
console.log(Children);
var outputBox = document.getElementById("outputBox").value;
var feedback;
if (age < 16) {
    feedback = "No car for you! You are too young!";
}
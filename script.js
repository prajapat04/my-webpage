document.getElementById("clickMeButton").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("clickMeButton").addEventListener("click", function() {
    document.getElementById("welcomeMessage").innerHTML = "You clicked the button!";
});

let skills = ["HTML", "CSS", "JavaScript", "React"];
function displaySkills() {
    for (let i = 0; i < skills.length; i++) {
        console.log(skills[i]);
    }
}
displaySkills();  // Call the function to see the output in the console

function displaySkillsOnPage() {
    let skillsList = document.getElementById("skillsList");
    skillsList.innerHTML = "";  // Clear the list before adding new items
    
    for (let i = 0; i < skills.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = skills[i];
        skillsList.appendChild(listItem);
    }
}
displaySkillsOnPage();  // Call the function to display on the page


document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();


let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

localStorage.setItem("userName", name);
localStorage.setItem("userEmail", email);

if (name === "" || email === "") {
    alert("Please fill out all fields!");
    return; // stop execution
}
else {
   alert("your info has been saved!");
}
});

window.onload = function() {
    let cname = localStorage.getItem("userName");
    let email = localStorage.getItem("userEmail");


if (cname && email){
    document.getElementById("savedInfo").innerHTML = `Name: ${cname} <br> Email: ${email}`;
}
};

console.log("Hello, JavaScript!");


let userName = "Prajapat";
const year = 2025;
var isLearning = true;

document.write("Name: " + userName + "<br>");
document.write("Year: " + year + "<br>");
document.write("Learning JavaScript: " + isLearning);




// Function Declaration
function greet(name) {
    return "Hello, " + name;
  }
  console.log(greet("Prajapat"));
  
  // Function Expression
  const multiply = function(x, y) {
    return x * y;
  };
  console.log("Multiply:", multiply(4, 5));
  
  // Arrow Function
  const square = num => num * num;
  console.log("Square:", square(6));
  
  // Scope Example
  let globalVar = "I'm global";
  function checkScope() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
  }
  checkScope();
  // console.log(localVar); // ❌ Uncaught ReferenceError
  
  // Hoisting example
  console.log(hoistedVar); // undefined (var is hoisted)
  var hoistedVar = "This is hoisted";
  

  const calculateArea = function(a, b){
    return a * b;
  }
  console.log(calculateArea(5, 5))
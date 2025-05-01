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




  
  // Function Expression
  const multiply = function(x, y) {
    return x * y;
  };
  console.log("Multiply:", multiply(4, 5));

  
  // Scope Example
  let globalVar = "I'm global";
  function checkScope() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
  }
  checkScope();
  // console.log(localVar); // ❌ Uncaught ReferenceError
  

  // Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Access first element
fruits.push("Mango");  // Add an element at the end
console.log(fruits);

// Loop through array using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Use map() to create a new array with fruit names in uppercase
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// Use filter() to find fruits that start with "B"
let bFruits = fruits.filter(fruit => fruit.startsWith('B'));
console.log(bFruits);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15



const fruitss = ["Apple", "Banana", "Cherry"];
for (const fruit of fruitss) {
  console.log(fruit);
}

const person = { name: "Alice", age: 25, city: "Kota" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

const numberss = [1, 2, 3, 4];
const squares = numberss.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]

const evenNumbers = numberss.filter(num => num % 2 === 0);
console.log(evenNumbers);

const transactions = [
    { id: 1, amount: 150 },
    { id: 2, amount: 250 },
    { id: 3, amount: 300 },
    { id: 4, amount: 100 }
  ];
  
  const largeTransactions = transactions.filter(transaction => transaction.amount > 200);
  console.log(largeTransactions);
  
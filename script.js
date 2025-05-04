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

const addBtn = document.getElementById("addItem");
const removeBtn = document.getElementById("removeItem");
const hightLightBtn = document.getElementById("highlight");
const list = document.getElementById("itemList");
const counter = document.getElementById("counter");

function updateCounter() {
   counter.textContent = list.children.length;
}
addBtn.addEventListener("click", ()=> {
 const li = document.createElement("li");
 li.textContent = `item ${list.children.length + 1}`;
 list.appendChild(li);
 updateCounter();
});

removeBtn.addEventListener("click", ()=> {
 if(list.lastElementChild){
   list.removeChild(list.lastElementChild);
   updateCounter();
 }
});
hightLightBtn.addEventListener("click", ()=> {
 // This selects only li elements inside #itemList
const items = document.querySelectorAll("#itemList li");

items.forEach(item => {
  item.classList.toggle("highlight");
});

});


function changeImage(mode) {
const image = document.getElementById("image");
if (mode === "day") {
   image.src = "https://via.placeholder.com/150/ffffcc/000000?text=Day";
} else {
   image.src = "https://via.placeholder.com/150/333333/ffffff?text=Night";
}
}

// to do list 
function addTodo() {
  let input = document.getElementById("todoInput");
  let value = input.value.trim();
  if (value === "") return;

  let li = document.createElement("li");
  li.textContent = value;

  let btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.style.marginLeft = "10px";
  btn.onclick = function() {
      li.remove();
  };

  li.appendChild(btn);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
};

//toggle manu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

//dark mode 
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

// 1. Load saved mode from localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

// 2. Toggle mode and save preference
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    toggle.textContent = "🌙";
  }
});


// Select the main list
let mainList = document.getElementById("mainList");

// Log first and last child
console.log("First child:", mainList.firstElementChild.textContent);
console.log("Last child:", mainList.lastElementChild.textContent);

// Get second <li> (Item 2)
let secondItem = mainList.children[1];
let subList = secondItem.querySelector("ul");
let subItems = subList.children;

console.log("Sub-items of Item 2:");
for (let item of subItems) {
  console.log(item.textContent);
}

// Log parent of sublist
console.log("Parent of sublist:", subList.parentElement.textContent);

// Log next and previous siblings of Sub-item 1
console.log("Next sibling of Sub-item 1:", subItems[0].nextElementSibling.textContent);
console.log("Previous sibling of Sub-item 2:", subItems[1].previousElementSibling.textContent);

// Change text of Sub-item 2
subItems[1].textContent = "Updated Sub-item 2";

// Add a new list item under mainList
let newItem = document.createElement("li");
newItem.textContent = "Item 4";
mainList.appendChild(newItem);

// Highlight sub-items on button click
document.getElementById("highlightSubItems").addEventListener("click", function() {
  for (let item of subItems) {
    item.classList.toggle("highlight");
  }
});

let itemList = document.getElementById("itemList");

// Parent element
console.log(itemList.parentElement);

// First and last element child
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);

// Siblings
console.log(itemList.firstElementChild.nextElementSibling);
console.log(itemList.lastElementChild.previousElementSibling);

// Change color of 2nd li
itemList.children[1].style.color = "blue";

// Add class to all li
for (let item of itemList.children) {
  item.classList.add("highlight");
}


  
  // // Function Expression
  // const multiply = function(x, y) {
  //   return x * y;
  // };
  // console.log("Multiply:", multiply(4, 5));

  
  // // Scope Example
  // let globalVar = "I'm global";
  // function checkScope() {
  //   let localVar = "I'm local";
  //   console.log(globalVar); // Accessible
  //   console.log(localVar);  // Accessible
  // }
  // checkScope();
  // console.log(localVar); // ❌ Uncaught ReferenceError
  

  // Arrays
// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits[0]); // Access first element
// fruits.push("Mango");  // Add an element at the end
// console.log(fruits);

// // Loop through array using for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


// // Use map() to create a new array with fruit names in uppercase
// let upperFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log(upperFruits);

// // Use filter() to find fruits that start with "B"
// let bFruits = fruits.filter(fruit => fruit.startsWith('B'));
// console.log(bFruits);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15



// const fruitss = ["Apple", "Banana", "Cherry"];
// for (const fruit of fruitss) {
//   console.log(fruit);
// }

// const person = { name: "Alice", age: 25, city: "Kota" };
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// const numberss = [1, 2, 3, 4];
// const squares = numberss.map(num => num * num);
// console.log(squares); // Output: [1, 4, 9, 16]

// const evenNumbers = numberss.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// const transactions = [
//     { id: 1, amount: 150 },
//     { id: 2, amount: 250 },
//     { id: 3, amount: 300 },
//     { id: 4, amount: 100 }
//   ];
  
//   const largeTransactions = transactions.filter(transaction => transaction.amount > 200);
//   console.log(largeTransactions);
  
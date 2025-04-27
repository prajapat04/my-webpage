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

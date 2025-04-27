document.getElementById("clickMeButton").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("clickMeButton").addEventListener("click", function() {
    document.getElementById("welcomeMessage").innerHTML = "You clicked the button!";
});
var skillsButton = document.getElementById("skillsButton");
var backButton = document.getElementById("backButton");
var skillsSection = document.getElementById("skillsSection");
skillsButton.addEventListener("click", function () {
    skillsSection.classList.remove("hidden");
    skillsButton.style.display = "none";
});
backButton.addEventListener("click", function () {
    skillsSection.classList.add("hidden");
    skillsButton.style.display = "block";
});

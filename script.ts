const skillsButton = document.getElementById("skillsButton") as HTMLButtonElement;
const backButton = document.getElementById("backButton") as HTMLButtonElement;
const skillsSection = document.getElementById("skillsSection") as HTMLElement;

skillsButton.addEventListener("click", () => {
  skillsSection.classList.remove("hidden");
  skillsButton.style.display = "none";
});

backButton.addEventListener("click", () => {
  skillsSection.classList.add("hidden");
  skillsButton.style.display = "block";
});

const gpPara = document.querySelector(".groupProgramsPara");
const gpMoreText = document.querySelector(".groupProgramsMoreText");
const gpButton = document.querySelector(".groupProgramsButton");

gpButton.addEventListener("click", (event) => {
    if (event.target.textContent === "Read More") {
        gpMoreText.style.display = "inline";
        gpButton.textContent = "Read Less";
    } else {
        gpMoreText.style.display = "none";
        gpButton.textContent = "Read More";
    }
})

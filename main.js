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

const nlPara = document.querySelector(".newLocationsPara");
const nlMoreText = document.querySelector(".newLocationsMoreText");
const nlButton = document.querySelector(".newLocationsButton");

nlButton.addEventListener("click", (event) => {
    if (event.target.textContent === "Read More") {
        nlMoreText.style.display = "inline";
        nlButton.textContent = "Read Less";
    } else {
        nlMoreText.style.display = "none";
        nlButton.textContent = "Read More";
    }
})
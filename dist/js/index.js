let skillExpander = document.querySelector(".skill-expander");
let skillList = document.querySelectorAll(".skill");

function expandSkills() {
    for (let i = 0; i < skillList.length; i++) {
        if (skillList[i].className === "skill hidden") {
            skillList[i].className = "skill";
        }
    }
}

function collapseSkills() {
    for (let i = 3; i < skillList.length; i++) {
        if (skillList[i].className === "skill") {
            skillList[i].className = "skill hidden";
        }
    }
}

skillExpander.addEventListener("click", event => {
    if (skillExpander.className === "skill-expander fas fa-2x fa-chevron-down") {
        expandSkills();
        skillExpander.className = "skill-expander fas fa-2x fa-chevron-up";
    } else {
        collapseSkills();
        skillExpander.className = "skill-expander fas fa-2x fa-chevron-down";
    }
});
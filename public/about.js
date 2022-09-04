const skillExpander = document.querySelector(".skill-expander");
const skillList = document.querySelectorAll(".skill");

const expandSkills = (skillsToShow) => {
    for (let i = 0; i < skillsToShow; i++) {
        if (skillList[i].className === "skill hidden") {
            skillList[i].className = "skill";
        }
    }
}

const collapseSkills = (skillsLeft) => {
    for (let i = skillsLeft; i < skillList.length; i++) {
        if (skillList[i].className === "skill") {
            skillList[i].className = "skill hidden";
        }
    }
}

skillExpander.addEventListener("click", event => {
    if (skillExpander.className === "skill-expander fas fa-2x fa-chevron-down") {
        expandSkills(skillList.length);
        skillExpander.className = "skill-expander fas fa-2x fa-chevron-up";
    } else {
        collapseSkills(3);
        skillExpander.className = "skill-expander fas fa-2x fa-chevron-down";
    }
});

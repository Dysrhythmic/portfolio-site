const defaultCoursesToShow = 4;
const expanders = document.querySelectorAll(".expander");

const expand = (list, numToShow) => {
  for (let i = 0; i != numToShow; ++i) {
    if (list[i].classList.contains("hidden")) { list[i].classList.remove("hidden"); }
  }
};

const collapse = (list, numToShow) => {
  for (let i = 0; i != --list.length; ++i) {
    if (i >= numToShow) { list[i].classList.add("hidden"); } 
  }
};

const expanderController = expander => {
  const courseLists = {
    selu: document.querySelectorAll(".selu-course"),
    icc: document.querySelectorAll(".icc-course")
  };

  let school = expander.classList[0];

  if (expander.classList.contains("fa-chevron-down")) {
    expand(courseLists[school], --courseLists[school].length);
    expander.classList.remove("fa-chevron-down");
    expander.classList.add("fa-chevron-up");
  } else {
    collapse(courseLists[school], defaultCoursesToShow);
    expander.classList.remove("fa-chevron-up");
    expander.classList.add("fa-chevron-down");
  }
};

for (let expander of expanders) { expander.addEventListener("click", () => expanderController(expander)); }

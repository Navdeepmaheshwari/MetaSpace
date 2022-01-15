const navCloseEl = document.querySelector(".nav__close");
const navIconEl = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navbgOverlay = document.querySelector(".nav__bgOverlay");
const arrow1=document.querySelector(".arrow1");
const answer1=document.querySelector(".answer1")
const arrow2=document.querySelector(".arrow2");
const answer2=document.querySelector(".answer2")
const arrow3=document.querySelector(".arrow3");
const answer3=document.querySelector(".answer3")
const navOpen = () => {
  navList.classList.add("show");
  navbgOverlay.classList.add("active");
  document.body.style =
    "visibility:visible;height:100vh;width:100vw;overflow:hidden;";
};
const navClose = () => {
  navList.classList.remove("show");
  navbgOverlay.classList.remove("active");
  document.body.style =
    "visibility:visible; height:initial;width:100%;overflow:hidden;";
};

const showAnswer1=()=>{
  // answer1.classList.add("display");
  arrow1.classList.add("arrowstyle");
    answer1.style= "display:block;";
    
}

const showAnswer2=()=>{
  answer2.style= "display:block;";
  arrow2.style="transform:rotate(90deg);"
}

const showAnswer3=()=>{
  answer3.style= "display:block;";
  arrow3.style="transform:rotate(90deg);"
}
navIconEl.addEventListener("click",navOpen);
navCloseEl.addEventListener("click", navClose);
navbgOverlay.addEventListener("click", navClose)
arrow1.addEventListener("click", showAnswer1)
arrow2.addEventListener("click", showAnswer2)
arrow3.addEventListener("click", showAnswer3)
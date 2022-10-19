const textOne = document.getElementById("textOne");
const textTwo = document.getElementById("textTwo");



setTimeout(cambiarClase, 6000)

function cambiarClase(){
    if(textTwo.classList.contains("notVisible")){
        textTwo.classList.remove("notVisible")
        textOne.classList.add("notVisible")
        setTimeout(cambiarClase, 6000)
    }else{
        textOne.classList.remove("notVisible")
        textTwo.classList.add("notVisible")
        setTimeout(cambiarClase, 6000)
    }
}



const navMobile = document.getElementById("nav-mobile");
const navItems = document.getElementById("nav-items");
const btnCollapse = document.getElementById("btn-collapse");
btnCollapse.addEventListener('click', isCollapsed);
let line1 =  document.getElementById("line1");
let line2 =  document.getElementById("line2");
let line3 =  document.getElementById("line3");

let i = 0;

function isCollapsed(){
  if (i == 0){
    collapseDisabled()
  } else{
    collapseActive()
    }
}

isCollapsed()

function collapseActive(){
    navMobile.style.backgroundColor ="white";
    navItems.style.display = "flex"
  
    line2.style.display = "none"
    line1.style.transform = "rotateZ(45deg)";
    line3.style.transform = "rotateZ(-45deg)";
    line1.style.margin = "-1px"
    line3.style.margin = "-1px"
    i--
}


function collapseDisabled(){
    navMobile.style.backgroundColor ="transparent";
    navItems.style.display = "none"
    line2.style.display = "flex"
    line1.style.transform = "rotateZ(0deg)";
    line3.style.transform = "rotateZ(0deg)";
    line1.style.margin = "3px"
    line3.style.margin = "3px"
    i++
    
}


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}
/* ==============================
MOBILE NAV
=============================== */

const bodyEl = document.body
const hiddenNavEl = document.querySelector(".mobilenav__hidden");
const openNavButtonEl = document.querySelector(".mobilenav__open");
const closeNavButtonEl = document.querySelector(".mobilenav__close");

openNavButtonEl.addEventListener("click", OnOpenNav)
closeNavButtonEl.addEventListener("click", OnCloseNav)

function OnOpenNav(e){

    hiddenNavEl.style.left = "0%";
    bodyEl.style.overflow = "hidden";

}

function OnCloseNav(e){

    hiddenNavEl.style.left = "100%";
    bodyEl.style.overflow = "scroll";

}
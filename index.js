const toggle = document.querySelector(".header__nav-toggle");
const navList = document.querySelector(".header__nav-list");

document.querySelector(".header__nav-toggle").addEventListener("click", function() {
    if (navList.style.display === "flex") {
        navList.style.display = "none";
    } else {
        navList.style.display = "flex";
    }
});

window.addEventListener("resize", checkWindowSize);

function checkWindowSize () {
    if (document.documentElement.clientWidth >= 750) {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none";
    }
}

console.log(document.documentElement.clientWidth);
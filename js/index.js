
// * [1] `mouseover`
let funBus = document.querySelectorAll(".nav-link");


funBus.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.color = "green";
    });
});

// * [2] `mouseout`
funBus.forEach(item => {
    item.addEventListener("mouseout", () => {
        item.style.color = "";
    });
});

// * [3] `mouseenter`
funBus.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.5)";
        item.style.transition = "all 0.5s";
    });
});

// * [4] `mouseleave`
funBus.forEach(item => {
    item.addEventListener("mouseleave", () => {
        item.style.transform = "";
        item.style.transition = "all 0.5s";
    });
});

// * [5] `resize`
const moreFunBus = document.querySelector(".intro img");
window.addEventListener("resize", () => {
    moreFunBus.src = "img/destination.jpg";
   
});

// * [6] `click`
const button = document.querySelectorAll(".btn");
button.forEach(item => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = "green";
        item.style.color = "white";

    });
});

// * [7] `dblclick`
button.forEach(item => {
    item.addEventListener("dblclick", (event) => {
        item.style.backgroundColor = "";
        item.style.color = "";
    });
});

// * [8] `keydown`
const keyDown = document.addEventListener("keydown", logKey);
function logKey(key) {
    alert(`You pressed the ${key.key} key! Was this a mistake?`);

};


// * [9]
const theFunBus = document.querySelector(".logo-heading");
theFunBus.addEventListener("mouseover", () => {
        theFunBus.style.color = "blue";
        theFunBus.style.fontSize = "5em";
        theFunBus.style.textShadow = "1px 1px 2px black";
        theFunBus.style.transform = "scale(1.5)";
        theFunBus.style.transition = "all 0.5s";
    });


// * [10]
theFunBus.addEventListener("mouseout", () => {
        theFunBus.style.color = "";
        theFunBus.style.fontSize = "";
        theFunBus.style.textShadow = "";
        theFunBus.style.transform = "";
        theFunBus.style.transition = "all 0.5s";
    });



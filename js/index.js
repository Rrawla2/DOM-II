// Your code goes here
// * [ ] `mouseover`
let funBus = document.querySelectorAll(".nav-link");


funBus.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.color = "green";
    });
});

// * [ ] `mouseout`
funBus.forEach(item => {
    item.addEventListener("mouseout", () => {
        item.style.color = "";
    });
});

// * [ ] `mouseenter`
funBus.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.5)";
        item.style.transition = "all 0.5s";
    });
});

// * [ ] `mouseleave`
funBus.forEach(item => {
    item.addEventListener("mouseleave", () => {
        item.style.transform = "";
        item.style.transition = "all 0.5s";
    });
});

// * [ ] `load`


// * [ ] `focus`


// * [ ] `resize`


// * [ ] `scroll`


// * [ ] `select`


// * [ ] `dblclick`
// Your code goes here
// * [ ] `mouseover`
let test = document.querySelectorAll(".nav-link");
console.log("test", test);

test.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.color = "green";
    });
});

    
// * [ ] `keydown`


// * [ ] `wheel`


// * [ ] `drag / drop`


// * [ ] `load`


// * [ ] `focus`


// * [ ] `resize`


// * [ ] `scroll`


// * [ ] `select`


// * [ ] `dblclick`
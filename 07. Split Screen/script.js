let ps5 = document.querySelector(".left");
let xbox = document.querySelector(".right");
let container = document.querySelector(".container");

ps5.addEventListener('mouseenter', () => {
    container.classList.add("active-left")
});
ps5.addEventListener("mouseleave", () => {
    container.classList.remove("active-left")
})

xbox.addEventListener('mouseenter', () => {
    container.classList.add("active-right")
});
xbox.addEventListener("mouseleave", () => {
    container.classList.remove("active-right")
})
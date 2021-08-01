const content = document.querySelectorAll(".content");

window.addEventListener('scroll', start);

function start() {
    let actionStart = window.innerHeight / 5 * 4;
    content.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;

        if (boxTop < actionStart) {
            box.classList.add("active")
        } else {
            box.classList.remove("active")
        }
    })
}
start()
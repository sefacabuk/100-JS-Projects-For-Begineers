const toggles = document.querySelectorAll(".toggle-btn");

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        console.log(toggle.parentNode);
        toggle.parentNode.classList.toggle('active');
    })
});
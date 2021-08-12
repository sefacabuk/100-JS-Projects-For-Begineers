const numbers = document.querySelectorAll(".number");


numbers.forEach(number => {
    number.innerText = "0";

    function updateNumber() {
        const target = parseInt(number.getAttribute('data-target'));
        const startingNum = parseInt(number.innerText);
        const increment = target/100;

        if(startingNum < target){
            number.innerText = `${Math.ceil(startingNum + increment)}`;
            setTimeout(() => {
                updateNumber()
            }, 1);
        }
    }

    updateNumber()
})
var colorContainer = document.getElementById("colorCode");

var genButton = document.getElementById("genNewBtn");

var symbols = "0123456789ABCDEF";

var color = "";

genButton.addEventListener('click', function(){
    for(var i=0; i<6; i++){
        color += symbols[Math.floor(Math.random() * 16)];
        console.log(color);
    }   

    colorContainer.innerHTML = "#" + color;
    document.body.style.background = "#"+color;
    color = "";
});
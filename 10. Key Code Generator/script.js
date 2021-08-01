const data = document.querySelector(".container");
window.addEventListener("keydown", (e) => {
    data.innerHTML = `

        <div class = "key">
            ${e.key == ' ' ? 'Spacebar' : e.key}
            <small>event.key</small> 
        </div>  
        <div class = "key">
            ${e.keyCode} 
            <small> event.keyCode </small>   
        </div>  
        <div class = "key" >
            ${e.code} 
            <small> event.code </small>  
        </div>
    `
})
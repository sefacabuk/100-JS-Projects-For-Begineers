const labels = document.querySelectorAll('div.form-control label');


labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((latter, index) => `<span style = "transition-delay: ${index * 30}ms">${latter}</span>`)
        .join('')

})
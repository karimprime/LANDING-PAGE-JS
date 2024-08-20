let img = document.querySelector('.img');
let container = document.querySelector('.container');

if (localStorage.length > 0){
    container.style.background = localStorage.color;
    img.src = localStorage.phone;
}

    function phones(phone) {
        localStorage.setItem('phone' ,phone);
        img.src = phone;
    }

function colors(color) {
    localStorage.setItem('color',color);
    container.style.background = color;
}


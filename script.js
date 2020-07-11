console.log('Color Gradient')
let h3=document.querySelector('h3');
let color1=document.querySelector('#favcolor1');
let color2=document.querySelector('#favcolor2');
let gradient=document.getElementById('gradient');
// gradient.style.background='red'

function setgradient(){
    gradient.style.background="linear-gradient(to right, "+
    color1.value + ","+ color2.value + ")";
    console.log(gradient.style.background);
    h3.textContent=gradient.style.background;
}

color1.addEventListener('input',setgradient);

color2.addEventListener('input',setgradient);
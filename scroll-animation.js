

const textsc = document.getElementById('textsc');
const textsc2 = document.getElementById('textsc2');
const textsc3 = document.getElementById('textsc3');
const textsc4 = document.getElementById('textsc4');
const textsc5 = document.getElementById('textsc5');
const textsc6 = document.getElementById('textsc6');
const textsc7 = document.getElementById('textsc7');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');

window.addEventListener('scroll', () => {
     const value = window.scrollY;

     textsc.style.marginBottom = value * -1.5 + 'px';
     textsc2.style.marginBottom = value * -0.6 + 'px';
     textsc3.style.marginTop = value * -0.8 + 'px';
     textsc4.style.marginBottom = value * -0.8 + 'px';
     textsc5.style.marginTop = value * -0.63 + 'px';
     textsc6.style.marginTop = value * -0.6 + 'px';
     textsc7.style.marginTop = value * -0.1 + 'px';
     bird1.style.top = value * -1.5 + 'px';
     bird1.style.left =value * 2 + 'px';
     bird2.style.top = value * -1.5 + 'px';
     bird2.style.left = value * -5 + 'px';
})

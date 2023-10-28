

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







// Some random colors
const colors = ["#9C6E58", "#4F6062", "#E2DED8"];

const numBalls = 40;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 12)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

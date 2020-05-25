//fire fist R
var rightFist = gsap.to('#fistR',{
  opacity: 1,
  y: -1500,
  duration: 2,
  paused: true
});

//fire fist L
var leftFist = gsap.to('#fistL',{
  opacity: 1,
  y: -1500,
  duration: 2,
  paused: true
});

document.querySelector("#redB").onclick = () =>
leftFist.play();

document.querySelector("#yellowB").onclick = () =>
rightFist.play();



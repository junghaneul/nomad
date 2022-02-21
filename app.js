const body = document.querySelector("body");
const bgImagePlace = document.createElement("img");

function getBg(){
  const bgImage1 = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
  const bgImageLength = bgImage1[Math.floor(Math.random()*bgImage1.length)];
  addImg();
  bgImagePlace.src = `img/${bgImageLength}`;
}

function addImg(){
  body.appendChild(bgImagePlace);
  bgImagePlace.classList.add("fade-in");
}

getBg();
setInterval(getBg,6800);
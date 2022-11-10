let boxs = document.getElementById("cbox")
let box = document.querySelectorAll(".box")
let btn = document.getElementById("Reset")
let rgbtext = document.getElementById("st");
let gamebox = document.querySelector(".hbox")
let message=document.getElementById("message")

btn.addEventListener("click", function () {
  let rbox = Math.floor(Math.random() * box.length);

  let a = one();
  afilter = a.replace(/\s+/g, '');

  // gamebox.style.backgroundColor = afilter


  rgbtext.innerText = afilter
  for (let i = 0; i < box.length; i++) {
    let random_val = one();

    box[i].style.backgroundColor = `${random_val}`;
    box[i].addEventListener("click", checkColor);
  }
  let k = box[rbox].style.backgroundColor = afilter
})

function xyz() {
  return Math.floor(Math.random() * 250)
}

function one() {
  return `rgb(${xyz()},${xyz()},${xyz()})`;
}

function checkColor(e) {
  let bg = this.style.backgroundColor;
  bg = bg.replace(/\s+/g, '');
  if (bg == afilter) {
    box.forEach((item) => {
      item.style.backgroundColor = bg;
      message.innerText="Great!"
    })
  } else {
    this.style.backgroundColor = 'transparent'
    message.innerText="try again"
  }
}

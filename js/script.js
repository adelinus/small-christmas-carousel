let previousArrow = document.querySelector(".previous");
let nextArrow = document.querySelector(".next");
let imgs = document.querySelectorAll(".card");
let gallery = document.querySelector(".gallery");
let transVal = 0;

previousArrow.addEventListener("click", moveLeft);
nextArrow.addEventListener("click", moveRight);

function moveLeft() {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].classList.contains("current")) {
      if (imgs[i] !== imgs[0]) {
        transVal += 220;
        gallery.style.transform = `translateX(${transVal}px)`;
        imgs[i].classList.remove("current");
        imgs[i - 1].classList.add("current");
        if (imgs[i] == imgs[imgs.length - 1]) {
          nextArrow.style.opacity = 1;
        }
        if (imgs[i] == imgs[1]) {
          previousArrow.style.opacity = 0.3;
        }
      }
      break;
    }
  }
}

function moveRight() {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].classList.contains("current")) {
      if (imgs[i] !== imgs[imgs.length - 1]) {
        transVal -= 220;
        gallery.style.transform = `translateX(${transVal}px)`;
        imgs[i].classList.remove("current");
        imgs[i + 1].classList.add("current");
        if (imgs[i] == imgs[0]) {
          previousArrow.style.opacity = 1;
        }
        if (imgs[i] == imgs[imgs.length - 2]) {
          nextArrow.style.opacity = 0.3;
        }
      }
      break;
    }
  }
}

"use strict";

const buttons = document.querySelectorAll(".left-side__button"),
  burgerButton = document.querySelector(".nav-bar__logo-link"),
  eventButtons = document.querySelectorAll(".event__button"),
  pictureButtons = document.querySelectorAll(".right-side__img-button"),
  changingPicture = document.querySelector(".right-side__img_big"),
  changingTitle = document.querySelector(".right-side__title"),
  changingText = document.querySelector(".right-side__text"),
  decorativeElements = document.querySelectorAll(
    ".left-side__decorative-element"
  ),
  themeButton = document.querySelector(".nav-bar__theme-button"),
  allButtons = document.querySelectorAll("button"),
  allSpan = document.querySelectorAll("span");

let windowSize = document.documentElement.clientWidth,
  otherLinks = document.querySelectorAll(".travel__link"),
  burgerMenu,
  menuFlag = false,
  themeFlag = false;

function fuck() {
  buttons.forEach(function (elementsCleare) {
    elementsCleare.classList.remove("active-point");
  });
  this.classList.add("active-point");
  decorativeElements.forEach(function (element) {
    element.classList.remove("activ-decorative-element");
  });
  document
    .getElementById(`${this.dataset.decnumber}`)
    .classList.add("activ-decorative-element");
}

function changingTextFunc(number) {
  windowSize = document.documentElement.clientWidth;
  if (number == 1) {
    changingTitle.textContent = "The first slide";
    changingText.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, minus!";
  } else if (number == 2) {
    changingTitle.textContent = "The second slide";
    changingText.textContent =
      "Pariatur, corporis inventore alias eos quis reprehenderit numquam mollitia adipisci ipsam illum.";
  } else if (number == 3) {
    changingTitle.textContent = "This Japan";
    changingText.textContent =
      "Japan consists of 6852 islands but only 430 of them have people living on them. There are just four main islands that form the core of the country including 97% of the land and 99% of the population. Those four islands are Honshu, Kyushu, Shikoku, and Hokkaido. The current total population of Japan is over 126 million people. But the population of Japan has started to decline. The low birth rate and aging population in Japan means that Japan will lose 30% of its population over the next 50 years.";
  } else if (number == 4) {
    changingTitle.textContent = "The fourth slide";
    changingText.textContent = "fourth lorem.........";
  } else {
    console.log("А это как тут вылезло?");
  }
  if (changingText.innerHTML.length > 230 && windowSize >= 1235) {
    changingTitle.classList.add("a-lot-of-text");
    changingText.classList.add("scroll-on");
  } else if (changingText.innerHTML.length > 230 && windowSize <= 662) {
    changingTitle.classList.add("a-lot-of-text");
    changingText.classList.add("scroll-on");
  } else {
    changingTitle.classList.remove("a-lot-of-text");
    changingText.classList.remove("scroll-on");
  }
}

burgerButton.onclick = function () {
  windowSize = document.documentElement.clientWidth;
  if (windowSize <= 968 && !menuFlag) {
    burgerMenu = document.createElement("div");
    burgerMenu.innerHTML = ` <nav class="burger__nav">
    <ul class="burger__menu">
      <li class="burger__item">
        <a href="#" class="burger__link">Dashboard</a>
      </li>
      <li class="burger__item">
        <a href="#" class="burger__link">Note’s</a>
      </li>
      <li class="burger__item">
        <a href="#" class="burger__link">Theme</a>
      </li>
      <li class="burger__item">
        <a href="#" class="burger__link">Account</a>
      </li>
      <li class="burger__item">
        <a href="#" class="burger__link">Explore</a>
      </li>
      <li class="burger__item">
        <a href="#" class="burger__link">Graph</a>
      </li>
      <li class="burger__item">
        <a href="#" class="burger__link">Messages</a>
      </li>
      <li class="burger__item">
        <a href="#" class="burger__link">Setting</a>
      </li>
    </ul>
  </nav>`;
    if (themeFlag) {
      burgerMenu.className = "burger dark-them";
    } else {
      burgerMenu.className = "burger";
    }
    document.querySelector(".header").after(burgerMenu);
    document.body.classList.add("scroll-off");
    menuFlag = !menuFlag;
  } else if (windowSize <= 968 && menuFlag) {
    document.querySelector(".burger").remove();
    document.body.classList.remove("scroll-off");
    menuFlag = !menuFlag;
  }
};

themeButton.onclick = function () {
  if (!themeFlag) {
    themeButton.style.background = "#fff";
    document.querySelector(".nav-bar__img").src = "img/general/moon.svg";
    document.body.classList.add("dark-them");
    allButtons.forEach(function (element) {
      element.classList.add("dark-them-color");
    });
    allSpan.forEach(function (element) {
      element.classList.add("dark-them-color");
    });
    otherLinks.forEach(function (element) {
      element.classList.add("dark-them-color");
    });
    themeFlag = !themeFlag;
  } else {
    themeButton.style.background = "transparent";
    document.querySelector(".nav-bar__img").src = "img/general/sun.svg";
    document.body.classList.remove("dark-them");
    allButtons.forEach(function (element) {
      element.classList.remove("dark-them-color");
    });
    allSpan.forEach(function (element) {
      element.classList.remove("dark-them-color");
    });
    otherLinks.forEach(function (element) {
      element.classList.remove("dark-them-color");
    });
    themeFlag = !themeFlag;
  }
};

buttons.forEach(function (element) {
  element.addEventListener("click", fuck);
});

eventButtons.forEach(function (element) {
  element.addEventListener("click", () => {
    eventButtons.forEach(function (elementik) {
      elementik.classList.remove("active-button");
    });
    element.classList.add("active-button");
  });
});

pictureButtons.forEach(function (element) {
  element.addEventListener("click", () => {
    changingPicture.src = `${element.dataset.imgnumber}`;
    changingTextFunc(element.dataset.funcnumber);
  });
});

document.querySelector("main").addEventListener("scroll", () => {
  document.querySelector("body").classList.add("red");
});

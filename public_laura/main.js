const hamburger = document.querySelector("#hamburger");
const ulMobile = document.querySelector("#nav-mobile");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", () => {
  main.style.paddingTop = `${nav.offsetHeight + 4}px`;
});

hamburger.addEventListener("click", () => {
  ulMobile.classList.toggle("toggled");
  const toggleNav = [
    { transform: "translate(100%)" },
    { transform: "translate(0)" },
  ];
  const options = {
    fill: "forwards",
    duration: 1000,
  };
  if (ulMobile.classList.contains("toggled")) {
    ulMobile.animate(toggleNav, options);
  } else {
    ulMobile.animate(toggleNav.reverse(), { ...options, duration: 2000 });
  }
});

document.addEventListener("click", (event) => {
  if (!hamburger.contains(event.target)) {
    if (ulMobile.classList.contains("toggled")) {
      ulMobile.classList.remove("toggled");
      ulMobile.animate(
        [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
        { fill: "forwards", duration: 1000 }
      );
    }
  }
});
window.addEventListener("scroll", (event) => {
  if (!hamburger.contains(event.target)) {
    if (ulMobile.classList.contains("toggled")) {
      ulMobile.classList.remove("toggled");
      ulMobile.animate(
        [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
        { fill: "forwards", duration: 500 }
      );
    }
  }
});
window.addEventListener("resize", (event) => {
   
  if (window.innerWidth > 640) { 
    main.style.paddingTop = `${nav.offsetHeight +4}px`;
    if (ulMobile.classList.contains("toggled")) {
      ulMobile.classList.remove("toggled");
      ulMobile.animate(
        [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
        { fill: "forwards", duration: 750 }
      );
    }
  }
});
const appHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener('resize', appHeight)
  appHeight()

const hamburger = document.querySelector('#hamburger');
const ulMobile = document.querySelector('#nav-mobile');
const logo = document.querySelector('#logo');
const nav = document.querySelector('nav');
const main = document.querySelector('main');

const appHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
window.addEventListener('resize', appHeight);
appHeight();

window.addEventListener('DOMContentLoaded', (event) => {
  console.log(document.documentElement.clientHeight);
  main.style.paddingTop = `${nav.offsetHeight + 8}px`;
  ulMobile.style.marginTop = `${nav.offsetHeight}px`;
  ulMobile.style.minHeight = `${window.innerHeight - nav.offsetHeight}px`;
});

hamburger.addEventListener('click', () => {
  ulMobile.style.marginTop = `${nav.offsetHeight}px`;
  ulMobile.style.minHeight = `${window.innerHeight - nav.offsetHeight}px`;
  ulMobile.classList.toggle('toggled');
  const toggleNav = [{ transform: 'translate(100%)' }, { transform: 'translate(0)' }];
  const options = {
    fill: 'forwards',
    duration: 500,
  };
  if (ulMobile.classList.contains('toggled')) {
    ulMobile.animate(toggleNav, options);
  } else {
    ulMobile.animate(toggleNav.reverse(), { ...options, duration: 750 });
  }
});

document.addEventListener('click', (event) => {
  ulMobile.style.marginTop = `${nav.offsetHeight}px`;
  ulMobile.style.minHeight = `${window.innerHeight - nav.offsetHeight}px`;
  if (!hamburger.contains(event.target)) {
    if (ulMobile.classList.contains('toggled')) {
      ulMobile.classList.remove('toggled');
      ulMobile.animate([{ transform: 'translate(0)' }, { transform: 'translate(100%)' }], { fill: 'forwards', duration: 750 });
    }
  }
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.opacity = '0.7';
    logo.style.padding = '2px 8px';
    hamburger.style.padding = '2px 8px';
  } else if (window.scrollY === 0) {
    nav.style.opacity = 'inherit';
    logo.style.padding = '8px';
    hamburger.style.padding = '8px';
  }
  if (window.scrollY > 20) {
    ulMobile.style.marginTop = `${nav.offsetHeight}px`;
    ulMobile.style.minHeight = `${window.innerHeight - nav.offsetHeight}px`;
    if (ulMobile.classList.contains('toggled')) {
      ulMobile.classList.remove('toggled');
      ulMobile.animate([{ transform: 'translate(0)' }, { transform: 'translate(100%)' }], { fill: 'forwards', duration: 750 });
    }
  }
});

window.addEventListener('resize', (event) => {
  console.log(nav.offsetHeight + 8);
  main.style.paddingTop = `${nav.offsetHeight + 8}px`;
  ulMobile.style.marginTop = `${nav.offsetHeight}px`;
  ulMobile.style.minHeight = `${window.innerHeight - nav.offsetHeight}px`;
  // console.log(window.innerWidth);
  if (window.innerWidth > 640) {
    if (ulMobile.classList.contains('toggled')) {
      ulMobile.classList.remove('toggled');
      ulMobile.animate([{ transform: 'translate(0)' }, { transform: 'translate(100%)' }], { fill: 'forwards', duration: 0 });
    }
  }
});

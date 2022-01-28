const css = document.getElementById('css');
const html = document.getElementById('html');
const js = document.getElementById('js');
const ts = document.getElementById('ts');
const react = document.getElementById('react');
const sass = document.getElementById('sass');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const bgColor = "--bg-color";
const color = "--color";
const animBgColor = "--anim-bg-color";
const animLeft = "--anim-left";

const $black = "#222222ff";
const $white = "#fafaffff";
const $blue = "#0094c6ff";
const $bluedark ="#007aabff";
const $bluelight = "#61dbfbff";
const $yellow = "#f7b32bff";
const $pink = "#da4167ff";
const $orange = "#d45c24ff";
const $orangedark = "#bd4922ff";

//////////////
const setAnimationProperties = (element, _bgColor = $white, _color = $black) => {
  element.style.setProperty(animBgColor, _bgColor);
  element.style.setProperty(color, _color);
  element.style.setProperty(animLeft, "0%");
  setTimeout(function() {
    element.style.setProperty(bgColor, _bgColor);
    element.style.setProperty(animLeft, "-100%");
      }, 250);
}

// RESET
const reset = () => {
  setAnimationProperties(one);
  setTimeout(function() {
    setAnimationProperties(two);
  }, 100);
  }

three.addEventListener("mouseleave", reset, false);

///////////////

html.addEventListener('mouseover', function(e) {
  setAnimationProperties(one, $blue, $black);
  setTimeout(function() {
    setAnimationProperties(two, $bluedark, $white);
  }, 100);
}, false);

css.addEventListener('mouseover', function(e) {
  setAnimationProperties(one, $orangedark, $white);
  setTimeout(function() {
    setAnimationProperties(two, $orange, $black);
  }, 100);
}, false);

js.addEventListener('mouseover', function(e) {
  setAnimationProperties(one, $yellow, $black);
  setTimeout(function() {
    setAnimationProperties(two, $white, $black);
  }, 100);
}, false);

ts.addEventListener('mouseover', function(e) {
  setAnimationProperties(one, $blue, $black);
  setTimeout(function() {
    setAnimationProperties(two);
  }, 100);
}, false);

react.addEventListener('mouseover', function(e) {
  setAnimationProperties(one, $bluelight, $black);
  setTimeout(function() {
    setAnimationProperties(two, $bluelight, $black);
  }, 100);
}, false);

sass.addEventListener('mouseover', function(e) {
  setAnimationProperties(one);
  setTimeout(function() {
    setAnimationProperties(two, $pink, $black);
  }, 100);
}, false);
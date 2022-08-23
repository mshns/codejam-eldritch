// выбор древнего и формирование трекера состояния колоды

const Azathoth = document.getElementById('Azathoth');
const Cthulthu = document.getElementById('Cthulthu');
const IogSothoth = document.getElementById('Iog-Sothoth');
const ShubNiggurath = document.getElementById('Shub-Niggurath');

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dot4 = document.getElementById('dot4');
const dot5 = document.getElementById('dot5');
const dot6 = document.getElementById('dot6');
const dot7 = document.getElementById('dot7');
const dot8 = document.getElementById('dot8');
const dot9 = document.getElementById('dot9');

import ancientsData from './ancients.js';

function setDots(ancient) {
  dot1.textContent = ancientsData[ancient].firstStage.greenCards;
  dot2.textContent = ancientsData[ancient].firstStage.brownCards;
  dot3.textContent = ancientsData[ancient].firstStage.blueCards;
  dot4.textContent = ancientsData[ancient].secondStage.greenCards;
  dot5.textContent = ancientsData[ancient].secondStage.brownCards;
  dot6.textContent = ancientsData[ancient].secondStage.blueCards;
  dot7.textContent = ancientsData[ancient].thirdStage.greenCards;
  dot8.textContent = ancientsData[ancient].thirdStage.brownCards;
  dot9.textContent = ancientsData[ancient].thirdStage.blueCards;
}

Azathoth.addEventListener('click', function() {
  Azathoth.classList.add('active');
  Cthulthu.classList.remove('active');
  IogSothoth.classList.remove('active');
  ShubNiggurath.classList.remove('active');
  setDots(0);
})
Cthulthu.addEventListener('click', function() {
  Cthulthu.classList.add('active');
  Azathoth.classList.remove('active');
  IogSothoth.classList.remove('active');
  ShubNiggurath.classList.remove('active');
  setDots(1);
})
IogSothoth.addEventListener('click', function() {
  IogSothoth.classList.add('active');
  Azathoth.classList.remove('active');
  Cthulthu.classList.remove('active');
  ShubNiggurath.classList.remove('active');
  setDots(2);
})
ShubNiggurath.addEventListener('click', function() {
  ShubNiggurath.classList.add('active');
  Azathoth.classList.remove('active');
  Cthulthu.classList.remove('active');
  IogSothoth.classList.remove('active');
  setDots(3);
})

// выбор уровня сложности

const btnVeryEasy = document.querySelector('.button-very-easy');
const btnEasy = document.querySelector('.button-easy');
const btnMiddle = document.querySelector('.button-middle');
const btnDifficult = document.querySelector('.button-difficult');
const btnVeryDifficult = document.querySelector('.button-very-difficult');

const btnShuffle = document.querySelector('.button-very-shuffle');

btnVeryEasy.addEventListener('click', function() {
  btnVeryEasy.classList.add('active');
  btnEasy.classList.remove('active');
  btnMiddle.classList.remove('active');
  btnDifficult.classList.remove('active');
  btnVeryDifficult.classList.remove('active');
})
btnEasy.addEventListener('click', function() {
  btnEasy.classList.add('active');
  btnVeryEasy.classList.remove('active');
  btnMiddle.classList.remove('active');
  btnDifficult.classList.remove('active');
  btnVeryDifficult.classList.remove('active');
})
btnMiddle.addEventListener('click', function() {
  btnMiddle.classList.add('active');
  btnVeryEasy.classList.remove('active');
  btnEasy.classList.remove('active');
  btnDifficult.classList.remove('active');
  btnVeryDifficult.classList.remove('active');
})
btnDifficult.addEventListener('click', function() {
  btnDifficult.classList.add('active');
  btnVeryEasy.classList.remove('active');
  btnEasy.classList.remove('active');
  btnMiddle.classList.remove('active');
  btnVeryDifficult.classList.remove('active');
})
btnVeryDifficult.addEventListener('click', function() {
  btnVeryDifficult.classList.add('active');
  btnVeryEasy.classList.remove('active');
  btnEasy.classList.remove('active');
  btnMiddle.classList.remove('active');
  btnDifficult.classList.remove('active');
})
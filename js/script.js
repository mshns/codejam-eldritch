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

let ancient, diffLevel;
let dot1Num, dot2Num, dot3Num, dot4Num, dot5Num, dot6Num, dot7Num, dot8Num, dot9Num;

function setDots(ancientNum) {
  dot1Num = ancientsData[ancientNum].firstStage.greenCards;
  dot1.textContent = dot1Num;
  dot2Num = ancientsData[ancientNum].firstStage.brownCards;
  dot2.textContent = dot2Num;
  dot3Num = ancientsData[ancientNum].firstStage.blueCards;
  dot3.textContent = dot3Num;
  dot4Num = ancientsData[ancientNum].secondStage.greenCards
  dot4.textContent = dot4Num;
  dot5Num = ancientsData[ancientNum].secondStage.brownCards;
  dot5.textContent = dot5Num;
  dot6Num = ancientsData[ancientNum].secondStage.blueCards;
  dot6.textContent = dot6Num;
  dot7Num = ancientsData[ancientNum].thirdStage.greenCards;
  dot7.textContent = dot7Num;
  dot8Num = ancientsData[ancientNum].thirdStage.brownCards
  dot8.textContent = dot8Num;
  dot9Num = ancientsData[ancientNum].thirdStage.blueCards;
  dot9.textContent = dot9Num;
}

Azathoth.addEventListener('click', function() {
  Azathoth.classList.add('active');
  Cthulthu.classList.remove('active');
  IogSothoth.classList.remove('active');
  ShubNiggurath.classList.remove('active');
  setDots(0);
  ancient = 'azathoth';
})
Cthulthu.addEventListener('click', function() {
  Cthulthu.classList.add('active');
  Azathoth.classList.remove('active');
  IogSothoth.classList.remove('active');
  ShubNiggurath.classList.remove('active');
  setDots(1);
  ancient = 'cthulhu';

})
IogSothoth.addEventListener('click', function() {
  IogSothoth.classList.add('active');
  Azathoth.classList.remove('active');
  Cthulthu.classList.remove('active');
  ShubNiggurath.classList.remove('active');
  setDots(2);
  ancient = 'iogSothoth';
})
ShubNiggurath.addEventListener('click', function() {
  ShubNiggurath.classList.add('active');
  Azathoth.classList.remove('active');
  Cthulthu.classList.remove('active');
  IogSothoth.classList.remove('active');
  setDots(3);
  ancient = 'shubNiggurath';
})

// выбор уровня сложности

const btnVeryEasy = document.querySelector('.button-very-easy');
const btnEasy = document.querySelector('.button-easy');
const btnMiddle = document.querySelector('.button-middle');
const btnDifficult = document.querySelector('.button-difficult');
const btnVeryDifficult = document.querySelector('.button-very-difficult');

btnVeryEasy.addEventListener('click', function() {
  btnVeryEasy.classList.add('active');
  btnEasy.classList.remove('active');
  btnMiddle.classList.remove('active');
  btnDifficult.classList.remove('active');
  btnVeryDifficult.classList.remove('active');
  diffLevel = 'very-easy';
})
btnEasy.addEventListener('click', function() {
  btnEasy.classList.add('active');
  btnVeryEasy.classList.remove('active');
  btnMiddle.classList.remove('active');
  btnDifficult.classList.remove('active');
  btnVeryDifficult.classList.remove('active');
  diffLevel = 'easy';
})
btnMiddle.addEventListener('click', function() {
  btnMiddle.classList.add('active');
  btnVeryEasy.classList.remove('active');
  btnEasy.classList.remove('active');
  btnDifficult.classList.remove('active');
  btnVeryDifficult.classList.remove('active');
  diffLevel = 'very-easy';
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

// замешивание колоды

const btnShuffle = document.querySelector('.button-shuffle');



btnShuffle.addEventListener('click', shuffle);


let arrCards = [];

function shuffle() {


  let arrBlue = [];
  let arrBrown = [];
  let arrGreen = [];

  let arrFirstStage = [];
  let arrSecondStage = [];
  let arrThirdStage = [];

cardsData.forEach(element => {
  if (element.color === 'blue') {
    arrBlue.push(element.src);
  } else if (element.color === 'brown') {
    arrBrown.push(element.src);
  } else {
    arrGreen.push(element.src);
  }
})


function cardsShuffle(a, b) {
  return 0.5 - Math.random();
}

arrBlue.sort(cardsShuffle);
arrBrown.sort(cardsShuffle);
arrGreen.sort(cardsShuffle);

arrThirdStage = arrBlue.slice(0, dot9Num).concat(arrBrown.slice(0, dot8Num)).concat(arrGreen.slice(0, dot7Num));
console.log(arrThirdStage);
arrSecondStage = arrBlue.slice(dot9Num, dot9Num + dot6Num).concat(arrBrown.slice(dot8Num, parseInt(dot8Num) + parseInt(dot5Num))).concat(arrGreen.slice(dot7Num, dot7Num + dot4Num));
console.log(arrSecondStage);
arrFirstStage = arrBlue.slice(dot9Num + dot6Num, dot9Num + dot6Num + dot3Num).concat(arrBrown.slice(dot8Num + dot5Num, dot8Num + dot5Num + dot2Num)).concat(arrGreen.slice(dot7Num + dot4Num, dot7Num + dot4Num + dot1Num));
console.log(arrFirstStage);


arrCards = arrThirdStage.sort(cardsShuffle).concat(arrSecondStage.sort(cardsShuffle)).concat(arrFirstStage.sort(cardsShuffle));
console.log(arrCards);
}


// показ карт и обновление трекера

import cardsData from './cards.js';
const lastCard = document.querySelector('.last-card');
const btnShowCard = document.querySelector('.card-back');

btnShowCard.addEventListener('click', function() {
  if (arrCards.length > 0) {
    lastCard.style.backgroundImage = arrCards[(arrCards.length - 1)];
    if ((arrCards[(arrCards.length - 1)].substring(24, 26)) === 'gr') {
      if (dot1.textContent != 0) {
        dot1.textContent--;
      } else if (dot4.textContent != 0) {
        dot4.textContent--;
      } else if (dot7.textContent != 0) {
        dot7.textContent--;
      }
    } else if ((arrCards[(arrCards.length - 1)].substring(24, 26)) === 'br') {
      if (dot2.textContent != 0) {
        dot2.textContent--;
      } else if (dot5.textContent != 0) {
        dot5.textContent--;
      } else if (dot8.textContent != 0) {
        dot8.textContent--;
      }
    } else {
      if (dot3.textContent != 0) {
        dot3.textContent--;
      } else if (dot6.textContent != 0) {
        dot6.textContent--;
      } else if (dot9.textContent != 0) {
        dot9.textContent--;
      }
    }
    arrCards.pop();
  } else {
    Azathoth.classList.remove('active');
    Cthulthu.classList.remove('active');
    IogSothoth.classList.remove('active');
    ShubNiggurath.classList.remove('active');
    
    btnVeryEasy.classList.remove('active');
    btnEasy.classList.remove('active');
    btnMiddle.classList.remove('active');
    btnDifficult.classList.remove('active');
    btnVeryDifficult.classList.remove('active');

    lastCard.style.backgroundImage = '';
    alert('Выберите Древнего, уровень сложности и замешайте колоду, пожалуйста.');
  }
})


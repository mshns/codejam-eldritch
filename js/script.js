// выбор древнего и формирование трекера состояния колоды

const Azathoth = document.getElementById("Azathoth");
const Cthulthu = document.getElementById("Cthulthu");
const IogSothoth = document.getElementById("Iog-Sothoth");
const ShubNiggurath = document.getElementById("Shub-Niggurath");

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");
const dot6 = document.getElementById("dot6");
const dot7 = document.getElementById("dot7");
const dot8 = document.getElementById("dot8");
const dot9 = document.getElementById("dot9");

import ancientsData from "./ancients.js";

let ancient = undefined;
let diffLevel = undefined;
let dot1Num;
let dot2Num;
let dot3Num;
let dot4Num;
let dot5Num;
let dot6Num;
let dot7Num;
let dot8Num;
let dot9Num;

function setDots(ancientNum) {
  dot1Num = ancientsData[ancientNum].firstStage.greenCards;
  dot1.textContent = dot1Num;
  dot2Num = ancientsData[ancientNum].firstStage.brownCards;
  dot2.textContent = dot2Num;
  dot3Num = ancientsData[ancientNum].firstStage.blueCards;
  dot3.textContent = dot3Num;
  dot4Num = ancientsData[ancientNum].secondStage.greenCards;
  dot4.textContent = dot4Num;
  dot5Num = ancientsData[ancientNum].secondStage.brownCards;
  dot5.textContent = dot5Num;
  dot6Num = ancientsData[ancientNum].secondStage.blueCards;
  dot6.textContent = dot6Num;
  dot7Num = ancientsData[ancientNum].thirdStage.greenCards;
  dot7.textContent = dot7Num;
  dot8Num = ancientsData[ancientNum].thirdStage.brownCards;
  dot8.textContent = dot8Num;
  dot9Num = ancientsData[ancientNum].thirdStage.blueCards;
  dot9.textContent = dot9Num;
  ancient = undefined;
  btnVeryEasy.classList.remove("active");
  btnEasy.classList.remove("active");
  btnMiddle.classList.remove("active");
  btnDifficult.classList.remove("active");
  btnVeryDifficult.classList.remove("active");
  lastCard.style.backgroundImage = "";
}

import sounds from "./sounds.js";

const audio = new Audio();
function playAudio(sound) {
  audio.src = sounds[sound].src;
  audio.play();
}

Azathoth.addEventListener("click", function () {
  Azathoth.classList.add("active");
  Cthulthu.classList.remove("active");
  IogSothoth.classList.remove("active");
  ShubNiggurath.classList.remove("active");
  setDots(0);
  playAudio(0);
  ancient = "azathoth";
});
Cthulthu.addEventListener("click", function () {
  Cthulthu.classList.add("active");
  Azathoth.classList.remove("active");
  IogSothoth.classList.remove("active");
  ShubNiggurath.classList.remove("active");
  playAudio(0);
  setDots(1);
  ancient = "cthulhu";
});
IogSothoth.addEventListener("click", function () {
  IogSothoth.classList.add("active");
  Azathoth.classList.remove("active");
  Cthulthu.classList.remove("active");
  ShubNiggurath.classList.remove("active");
  playAudio(0);
  setDots(2);
  ancient = "iogSothoth";
});
ShubNiggurath.addEventListener("click", function () {
  ShubNiggurath.classList.add("active");
  Azathoth.classList.remove("active");
  Cthulthu.classList.remove("active");
  IogSothoth.classList.remove("active");
  playAudio(0);
  setDots(3);
  ancient = "shubNiggurath";
});

// выбор уровня сложности

const btnVeryEasy = document.querySelector(".button-very-easy");
const btnEasy = document.querySelector(".button-easy");
const btnMiddle = document.querySelector(".button-middle");
const btnDifficult = document.querySelector(".button-difficult");
const btnVeryDifficult = document.querySelector(".button-very-difficult");

btnVeryEasy.addEventListener("click", function () {
  playAudio(2);
  btnVeryEasy.classList.add("active");
  btnEasy.classList.remove("active");
  btnMiddle.classList.remove("active");
  btnDifficult.classList.remove("active");
  btnVeryDifficult.classList.remove("active");
  diffLevel = "very-easy";
  lastCard.style.backgroundImage = "";
});
btnEasy.addEventListener("click", function () {
  playAudio(2);
  btnEasy.classList.add("active");
  btnVeryEasy.classList.remove("active");
  btnMiddle.classList.remove("active");
  btnDifficult.classList.remove("active");
  btnVeryDifficult.classList.remove("active");
  diffLevel = "easy";
  lastCard.style.backgroundImage = "";
});
btnMiddle.addEventListener("click", function () {
  playAudio(2);
  btnMiddle.classList.add("active");
  btnVeryEasy.classList.remove("active");
  btnEasy.classList.remove("active");
  btnDifficult.classList.remove("active");
  btnVeryDifficult.classList.remove("active");
  diffLevel = "middle";
  lastCard.style.backgroundImage = "";
});
btnDifficult.addEventListener("click", function () {
  playAudio(2);
  btnDifficult.classList.add("active");
  btnVeryEasy.classList.remove("active");
  btnEasy.classList.remove("active");
  btnMiddle.classList.remove("active");
  btnVeryDifficult.classList.remove("active");
  diffLevel = "difficult";
  lastCard.style.backgroundImage = "";
});
btnVeryDifficult.addEventListener("click", function () {
  playAudio(2);
  btnVeryDifficult.classList.add("active");
  btnVeryEasy.classList.remove("active");
  btnEasy.classList.remove("active");
  btnMiddle.classList.remove("active");
  btnDifficult.classList.remove("active");
  diffLevel = "very-difficult";
  lastCard.style.backgroundImage = "";
});

// замешивание колоды

const btnShuffle = document.querySelector(".button-shuffle");
btnShuffle.addEventListener("click", shuffle);

let arrCards = [];

function shuffle() {
  console.log("😱 ancient: " + ancient);
  console.log("⚙️ difficulty: " + diffLevel);

  let arrBlue = []; // массив синих карт, отобранных по уровню сложности
  let arrBrown = []; // массив коричневых карт, отобранных по уровню сложности
  let arrGreen = []; // массив зелёных карт, отобранных по уровню сложности
  let arrBrownNormal = []; // массив коричневых карт средней сложности для добавления к очень простым или очень сложным
  let arrGreenNormal = []; // массив зелёных карт средней сложности для добавления к очень простым или очень сложным

  let arrFirstStage = []; // массив карт для первой стадии
  let arrSecondStage = []; // массив карт для второй стадии
  let arrThirdStage = []; // массив карт для третьей стадии

  btnShowCardTitle.textContent = "Жмите на карту";

  playAudio(1);

  if (ancient === undefined || diffLevel === undefined) {
    alert(
      "1. Выберите Древнего.\n2. Выберите уровень сложности.\n3. Замешайте колоду.\n4. Жмите на фиолетовую карту."
    );
    return resetSettings();
  }

  if (diffLevel === "middle") {
    cardsData.forEach((element) => {
      if (element.color === "blue") {
        arrBlue.push(element);
      } else if (element.color === "brown") {
        arrBrown.push(element);
      } else {
        arrGreen.push(element);
      }
    });
  } else if (diffLevel === "easy") {
    cardsData.forEach((element) => {
      if (element.color === "blue" && element.difficulty != "hard") {
        arrBlue.push(element);
      } else if (element.color === "brown" && element.difficulty != "hard") {
        arrBrown.push(element);
      } else if (element.color === "green" && element.difficulty != "hard") {
        arrGreen.push(element);
      }
    });
  } else if (diffLevel === "difficult") {
    cardsData.forEach((element) => {
      if (element.color === "blue" && element.difficulty != "easy") {
        arrBlue.push(element);
      } else if (element.color === "brown" && element.difficulty != "easy") {
        arrBrown.push(element);
      } else if (element.color === "green" && element.difficulty != "easy") {
        arrGreen.push(element);
      }
    });
  } else if (diffLevel === "very-easy") {
    cardsData.forEach((element) => {
      if (element.color === "blue" && element.difficulty === "easy") {
        arrBlue.push(element);
      } else if (element.color === "brown" && element.difficulty === "easy") {
        arrBrown.push(element);
      } else if (element.color === "brown" && element.difficulty === "normal") {
        arrBrownNormal.push(element);
      } else if (element.color === "green" && element.difficulty === "easy") {
        arrGreen.push(element);
      } else if (element.color === "green" && element.difficulty === "normal") {
        arrGreenNormal.push(element);
      }
    });

    if (arrBrown.length < dot2Num + dot5Num + dot8Num) {
      arrBrown = arrBrown.concat(
        arrBrownNormal
          .sort(cardsShuffle)
          .slice(0, dot2Num + dot5Num + dot8Num - arrBrown.length)
      );
    }

    if (arrGreen.length < dot1Num + dot4Num + dot7Num) {
      arrGreen = arrGreen.concat(
        arrGreenNormal
          .sort(cardsShuffle)
          .slice(0, dot1Num + dot4Num + dot7Num - arrGreen.length)
      );
    }
  } else if (diffLevel === "very-difficult") {
    cardsData.forEach((element) => {
      if (element.color === "blue" && element.difficulty === "hard") {
        arrBlue.push(element);
      } else if (element.color === "brown" && element.difficulty === "hard") {
        arrBrown.push(element);
      } else if (element.color === "brown" && element.difficulty === "normal") {
        arrBrownNormal.push(element);
      } else if (element.color === "green" && element.difficulty === "hard") {
        arrGreen.push(element);
      } else if (element.color === "green" && element.difficulty === "normal") {
        arrGreenNormal.push(element);
      }
    });

    if (arrBrown.length < dot2Num + dot5Num + dot8Num) {
      arrBrown = arrBrown.concat(
        arrBrownNormal
          .sort(cardsShuffle)
          .slice(0, dot2Num + dot5Num + dot8Num - arrBrown.length)
      );
    }
    if (arrGreen.length < dot1Num + dot4Num + dot7Num) {
      arrGreen = arrGreen.concat(
        arrGreenNormal
          .sort(cardsShuffle)
          .slice(0, dot1Num + dot4Num + dot7Num - arrGreen.length)
      );
    }
  }

  function cardsShuffle(a, b) {
    return 0.5 - Math.random();
  }

  arrBlue.sort(cardsShuffle);
  arrBrown.sort(cardsShuffle);
  arrGreen.sort(cardsShuffle);

  arrThirdStage = arrBlue
    .slice(0, dot9Num)
    .concat(arrBrown.slice(0, dot8Num))
    .concat(arrGreen.slice(0, dot7Num));
  arrSecondStage = arrBlue
    .slice(dot9Num, dot9Num + dot6Num)
    .concat(arrBrown.slice(dot8Num, dot8Num + dot5Num))
    .concat(arrGreen.slice(dot7Num, dot7Num + dot4Num));
  arrFirstStage = arrBlue
    .slice(dot9Num + dot6Num, dot9Num + dot6Num + dot3Num)
    .concat(arrBrown.slice(dot8Num + dot5Num, dot8Num + dot5Num + dot2Num))
    .concat(arrGreen.slice(dot7Num + dot4Num, dot7Num + dot4Num + dot1Num));

  arrCards = arrThirdStage
    .sort(cardsShuffle)
    .concat(arrSecondStage.sort(cardsShuffle))
    .concat(arrFirstStage.sort(cardsShuffle));

  ancient = undefined;
  diffLevel = undefined;
  btnShowCardTitle.classList.add("visible");
}

// показ карт и обновление трекера

import cardsData from "./cards.js";

const lastCard = document.querySelector(".last-card");
const btnShowCard = document.querySelector(".card-back");
const btnShowCardTitle = document.querySelector(".title-card-back");

btnShowCard.addEventListener("click", function () {
  playAudio(2);
  if (ancient != undefined || diffLevel != undefined) {
    resetSettings();
    alert(
      "1. Выберите Древнего.\n2. Выберите уровень сложности.\n3. Замешайте колоду.\n4. Жмите на фиолетовую карту."
    );
  }
  if (arrCards.length > 0) {
    const img = new Image();
    img.src = arrCards[arrCards.length - 1].src;
    img.onload = () => {
      lastCard.style.backgroundImage = `url(${img.src})`;
    };

    if (arrCards[arrCards.length - 1].color === "green") {
      if (dot1.textContent != 0) {
        dot1.textContent--;
      } else if (dot4.textContent != 0) {
        dot4.textContent--;
      } else if (dot7.textContent != 0) {
        dot7.textContent--;
      }
    } else if (arrCards[arrCards.length - 1].color === "brown") {
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
    console.log(
      "🎴 " +
        arrCards[arrCards.length - 1].id +
        ": " +
        arrCards[arrCards.length - 1].difficulty
    );
    arrCards.pop();
    if (arrCards.length === 0) {
      btnShowCardTitle.textContent = "Начать заново";
    }
  } else {
    resetSettings();
  }
});

// Сброс настроек

function resetSettings() {
  Azathoth.classList.remove("active");
  Cthulthu.classList.remove("active");
  IogSothoth.classList.remove("active");
  ShubNiggurath.classList.remove("active");

  btnVeryEasy.classList.remove("active");
  btnEasy.classList.remove("active");
  btnMiddle.classList.remove("active");
  btnDifficult.classList.remove("active");
  btnVeryDifficult.classList.remove("active");

  ancient = undefined;
  diffLevel = undefined;
  btnShowCardTitle.classList.remove("visible");

  lastCard.style.backgroundImage = "";
}

// score

console.log(
  "Мои контакты:\n",
  "📧 Discord: mishanos#6940\nhttps://discordapp.com/users/561035807046238209\n",
  "📧 Telegram: @msh_ns\nhttps://t.me/msh_ns\n\n",

  "📂 Score: 105 / 105\n\n",

  "✅ [+20] На выбор предоставляются 4 карты Древних:\n",
  "✔️ Азатот (+5)\n",
  "✔️ Ктулху (+5)\n",
  "✔️ Йог-Сотот (+5)\n",
  "✔️ Шуб-Ниггурат (+5)\n\n",

  "✅ [+25] На выбор предоставляются 5 уровней сложности:\n",
  "✔️ Очень лёгкий (+5)\n",
  "✔️ Лёгкий (+5)\n",
  "✔️ Средний (+5)\n",
  "✔️ Высокий (+5)\n",
  "✔️ Очень высокий (+5)\n\n",

  "✅ [+40] Карты замешиваются согласно правилам игры.\n",
  "✅ [+20] Есть трекер текущего состояния колоды.\n\n"
);

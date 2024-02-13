'use strict';

const Quest = document.querySelectorAll('.quest'),
      questions = document.querySelectorAll('.questions');
const answer = document.querySelectorAll('.Answer');
const showBtns = document.querySelectorAll('.show'),
      closeBtns = document.querySelectorAll('.close');

let showArr = Array.from(showBtns),
    closeArr = Array.from(closeBtns);
let ans = Array.from(answer),
    question = Array.from(Quest);

question.forEach(quest => {
  quest.addEventListener('click', () => {
    questions[question.indexOf(quest)].classList.toggle('showing');

    if (questions[question.indexOf(quest)].classList.contains('btnClose') || questions[question.indexOf(quest)].classList.contains('btnShow')) {
      questions[question.indexOf(quest)].classList.remove('btnClose');
      questions[question.indexOf(quest)].classList.remove('btnShow');
      questions[question.indexOf(quest)].classList.toggle('showing');
    }
  }, false)
})

showArr.forEach(btnz => {
  btnz.addEventListener('click', () => {
    questions[showArr.indexOf(btnz)].classList.toggle('btnShow');

    if (questions[showArr.indexOf(btnz)].classList.contains('showing') || questions[showArr.indexOf(btnz)].classList.contains('btnClose')) {
      questions[showArr.indexOf(btnz)].classList.remove('btnClose');
      questions[showArr.indexOf(btnz)].classList.remove('showing');
      questions[showArr.indexOf(btnz)].classList.toggle('btnShow');
    }
  }, false)
})

closeArr.forEach(btnz => {
  btnz.addEventListener('click', () => {
    questions[closeArr.indexOf(btnz)].classList.toggle('btnClose');

    if (questions[closeArr.indexOf(btnz)].classList.contains('showing') || questions[closeArr.indexOf(btnz)].classList.contains('btnShow')) {
      questions[closeArr.indexOf(btnz)].classList.remove('btnShow');
      questions[closeArr.indexOf(btnz)].classList.remove('showing');
      questions[closeArr.indexOf(btnz)].classList.toggle('btnClose')
    }
  }, false)
})

/* I wanted 50 lines and I got it */
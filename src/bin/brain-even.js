#!/usr/bin/env node
import answer from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const user = answer('May I have your name? ');
console.log(`Hello, ${user}!`);
let countCorrectAnswers = 0;

while (countCorrectAnswers < 3) {
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answerToQuestion = answer('Your answer: ');
  if (answerToQuestion === correctAnswer) {
    countCorrectAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(`"${answerToQuestion}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${user}!`);
  }
}
console.log(`Congratulations, ${user}!`);

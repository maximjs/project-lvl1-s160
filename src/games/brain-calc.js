
import { greeting, questionAndAnswer, randomNumber } from '..';

export default () => {
  const user = greeting('What is the result of the expression?\n');
  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();
    const randomNumberOperator = randomNumber();

    let operator = '';
    if (randomNumberOperator <= 33) {
      operator = '+';
    } else if (randomNumberOperator <= 66) {
      operator = '-';
    } else {
      operator = '*';
    }

    let correctAnswer = 0;
    if (operator === '+') {
      correctAnswer = randomNumber1 + randomNumber2;
    } else if (operator === '-') {
      correctAnswer = randomNumber1 - randomNumber2;
    } else if (operator === '*') {
      correctAnswer = randomNumber1 * randomNumber2;
    }

    const question = `${randomNumber1} ${operator} ${randomNumber2}`;
    const count = questionAndAnswer(question, String(correctAnswer), user);
    countCorrectAnswers += count;
  }
  console.log(`Congratulations, ${user}!`);
};

import { randomNumber } from '..';

export const description = 'What is the result of the expression?\n';
export const questionAndAnswer = () => {
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
    correctAnswer = String(randomNumber1 + randomNumber2);
  } else if (operator === '-') {
    correctAnswer = String(randomNumber1 - randomNumber2);
  } else if (operator === '*') {
    correctAnswer = String(randomNumber1 * randomNumber2);
  }

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  return { question, correctAnswer };
};

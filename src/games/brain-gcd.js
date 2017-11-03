
import { greeting, questionAndAnswer, randomNumber } from '..';

const biggestCommonDivisor = (num1, num2) => {
  const iter = (counter, commonDivisor) => {
    if (counter > num1 || counter > num2) {
      return commonDivisor;
    }
    if (num1 % counter === 0 && num2 % counter === 0) {
      commonDivisor = counter;
    }
    return iter(counter + 1, commonDivisor);
  };
  return iter(1, 1);
};

export default () => {
  const user = greeting('Find the greatest common divisor of given numbers.\n');
  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();
    const correctAnswer = biggestCommonDivisor(randomNumber1, randomNumber2);

    const question = ` ${randomNumber1} ${randomNumber2} `;
    const count = questionAndAnswer(question, String(correctAnswer), user);
    countCorrectAnswers += count;
  }
  console.log(`Congratulations, ${user}!`);
};

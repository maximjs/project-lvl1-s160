
import { randomNumber } from '..';

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

export const description = 'Find the greatest common divisor of given numbers.\n';


export const questionAndAnswer = () => {
  const randomNumber1 = randomNumber();
  const randomNumber2 = randomNumber();
  const correctAnswer = String(biggestCommonDivisor(randomNumber1, randomNumber2));
  const question = ` ${randomNumber1} ${randomNumber2} `;
  return { question, correctAnswer };
};

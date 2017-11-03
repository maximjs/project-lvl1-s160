import { randomNumber } from '..';

export const description = 'Answer "yes" if number even otherwise answer "no".\n';
export const questionAndAnswer = () => {
  const question = randomNumber();
  return { question, correctAnswer: (question % 2 === 0) ? 'yes' : 'no' };
};

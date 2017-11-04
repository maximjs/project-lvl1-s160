import gameEngine, { randomNumber } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const questionAndAnswer = () => {
  const question = randomNumber();
  return { question, correctAnswer: (question % 2 === 0) ? 'yes' : 'no' };
};

const runGame = () => gameEngine(description, questionAndAnswer);
export default runGame;

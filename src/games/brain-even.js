import { greeting, questionAndAnswer, randomNumber } from '..';

export default () => {
  const user = greeting('Answer "yes" if number even otherwise answer "no".\n');
  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const randomNum = randomNumber();
    const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
    const count = questionAndAnswer(randomNum, correctAnswer, user);
    countCorrectAnswers += count;
  }
  console.log(`Congratulations, ${user}!`);
};

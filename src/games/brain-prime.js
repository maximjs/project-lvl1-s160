import gameEngine from '..';

const description = 'Is number a Prime number?\n';

const getRandomNumber = multiplier => Math.floor(Math.random() * multiplier);

const isPrimeNumber = (number) => {
  if (number === 1) {
    return true;
  }
  const iter = (counter) => {
    if (counter === number) {
      return true;
    }
    if (number % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

const questionAndAnswer = () => {
  const randomNum = getRandomNumber(100);
  return { question: randomNum, correctAnswer: (isPrimeNumber(randomNum)) ? 'yes' : 'no' };
};

const runGame = () => gameEngine(description, questionAndAnswer);
export default runGame;

import gameEngine from '..';

const description = 'What number is missing in this progression?\n';
const randomNumber = multiplier => Math.floor(Math.random() * multiplier);

const questionAndAnswer = () => {
  const firstElProgression = randomNumber(40);
  const diffProgression = randomNumber(20);
  const progressionArray = [];
  progressionArray.push(firstElProgression);
  for (let i = 2; i <= 10; i += 1) {
    const newElement = firstElProgression + ((i - 1) * diffProgression);
    progressionArray.push(newElement);
  }
  const randomNumberElement = randomNumber(10);
  const missingElement = progressionArray[randomNumberElement];
  progressionArray[randomNumberElement] = '..';
  const progressionStr = progressionArray.join(' ');
  return { question: progressionStr, correctAnswer: String(missingElement) };
};

const runGame = () => gameEngine(description, questionAndAnswer);
export default runGame;

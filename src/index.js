import readlineSync from 'readline-sync';

export const randomNumber = () => Math.floor(Math.random() * 100);

const askQuestions = (numberQuestions, user, questionAndAnswer) => {
  const iter = (counter) => {
    if (counter > numberQuestions) {
      return true;
    }
    const { question, correctAnswer } = questionAndAnswer();
    console.log(`Question: ${question}`);
    const answerToQuestion = readlineSync.question('Your answer: ');
    if (answerToQuestion === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${answerToQuestion}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${user}!`);
    }
    return iter(counter);
  };
  return iter(1);
};

export default (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n`);
  const endOfGame = askQuestions(3, user, questionAndAnswer);
  if (endOfGame) {
    console.log(`Congratulations, ${user}!`);
  }
};

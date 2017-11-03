import readlineSync from 'readline-sync';

export const randomNumber = () => Math.floor(Math.random() * 100);

export default (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n`);
  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const { question, correctAnswer } = questionAndAnswer();
    console.log(`Question: ${question}`);
    const answerToQuestion = readlineSync.question('Your answer: ');
    if (answerToQuestion === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`"${answerToQuestion}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${user}!`);
    }
  }
  console.log(`Congratulations, ${user}!`);
};

import readlineSync from 'readline-sync';

export const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!\n`);
  return user;
};

export const questionAndAnswer = (question, correctAnswer, user) => {
  console.log(`Question: ${question}`);
  const answerToQuestion = readlineSync.question('Your answer: ');
  if (answerToQuestion === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`"${answerToQuestion}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${user}!`);
  return 0;
};

export const randomNumber = () => Math.floor(Math.random() * 100);

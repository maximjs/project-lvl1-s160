import readlineSync from 'readline-sync';

export default (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

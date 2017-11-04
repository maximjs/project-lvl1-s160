export const description = 'Balance the given number.\n';
const randomNumber = () => Math.floor(Math.random() * 10000);

const getBalancedArray = (array) => {
  const newArr = array.slice();
  newArr.sort();
  const arrLength = newArr.length;
  const diffMinMaxEl = newArr[arrLength - 1] - newArr[0];
  if (diffMinMaxEl > 1) {
    newArr[arrLength - 1] -= 1;
    newArr[0] += 1;
  } else {
    return newArr;
  }
  return getBalancedArray(newArr);
};

export const questionAndAnswer = () => {
  const randNum = randomNumber();
  const randNumString = String(randNum);
  const randNumArr = randNumString.split('').map(el => Number(el));
  const balancedArray = getBalancedArray(randNumArr);
  const balancedNumber = Number(balancedArray.join(''));
  return { question: randNum, correctAnswer: String(balancedNumber) };
};

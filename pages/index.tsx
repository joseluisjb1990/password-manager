import type { NextPage } from 'next'
const PASSWORD_LENGTH = 16;

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generatePassword = () => {
  const charCategories = [
    "abcdefghijklmnopqrstuvxyz",
    "ABCDEFGHIJKLMNOPQRSTUVXYZ",
    "0123456789",
    "£$&()*+[]@#^-_!?"
  ];

  return Array.apply(null, Array(PASSWORD_LENGTH)).map(() => {
    const randomCategory = getRandomInt(0, Object.keys(charCategories).length);
    const letters = charCategories[randomCategory];
    return letters[getRandomInt(0, letters.length)]
  }).join('');
}

const Home: NextPage = () => {
  return (
    <p>Password: {generatePassword()}</p>
  )
}

export default Home

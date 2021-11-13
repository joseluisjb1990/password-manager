import { Box, Button, Container, makeStyles } from '@material-ui/core';
import type { NextPage } from 'next'
import { useState } from 'react';
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

const useStyles = makeStyles({
  container: {
    backgroundColor: '#FDD2BF',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  text: {
    fontSize: '40px',
    color: 'white',
    fontWeight: 'bold',
  },

  textContainer: {
    marginTop: '200px',
    backgroundColor: '#FF6B6B',
    padding: '8px',
    borderRadius: '25px',
  },

  button: {
    marginTop: '8px',
    fontSize: '16px',
    backgroundColor: 'white',
    color: 'black',
  }
});

const Home: NextPage = () => {
  const [password] = useState(generatePassword());
  const classes = useStyles();

  return (
    <Container
      className={classes.container}
      maxWidth="xl"
    >
      <div className={classes.textContainer}>
        <span className={classes.text}>{password}</span>
      </div>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => {navigator.clipboard.writeText(password)}}>
          COPY
      </Button>
    </Container>
  )
}

export default Home

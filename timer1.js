const readUserInput = () => {
  return process.argv.slice(2);
};

const timer = () => {
  const timerArray = readUserInput();


  for (let i = 0; i < timerArray.length; i++) {
    if (!isNaN(timerArray[i]) && timerArray[i] >= 0) {
      setTimeout(() => {
        console.log('\u0007');
      }, Number(timerArray[i]) * 1000);
    }
  }
};

timer();

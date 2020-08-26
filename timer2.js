// const readLine = require('readline');

// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0062') {
    console.log('\u0007');
  } else if (key === '\u0003') {
    process.exit();
  } else if (!isNaN(key)) {
    let countDown = Number(key);
    setTimeout(() => {
      console.log('\u0007');
    }, countDown * 1000);
    console.log(`Setting timer for ${countDown} seconds`);
  } else {
    console.log('not a valid input');
  }
});
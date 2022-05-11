process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === 'b') process.stdout.write('\x07');
  if (!isNaN(Number(key))) {
    delay = Number(key) * 1000;
    process.stdout.write(`Setting timer for ${Number(key)} seconds...`);
    process.stdout.write('\n');
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  };

  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!");
    process.stdout.write('\n');
    process.exit();
  }
});

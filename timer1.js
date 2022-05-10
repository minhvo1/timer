const initialArgs = process.argv.slice(2);
const args = initialArgs.filter((element) => (typeof Number(element) === 'number' && Number(element) >= 0));
for (let time of args) {
  let delay = time * 1000;
  setTimeout(() => {
    console.log(time)
  },delay)
};
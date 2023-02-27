console.log("clesies to frahit");
const clesiestofrahit = (celsies) => {
  return (celsies * (9 / 5) + 32).toFixed(2);
};
console.log(process.argv);
const [, , celsies] = process.argv;
console.log(clesiestofrahit(celsies));

function average(numbers){
  const filteredNumbers = numbers.filter(val => !Number.isNaN(value));
  return filteredNumbers.reduce((p,c) => p + c , 0)/ filteredNumbers.length;
}

module.exports = {average};

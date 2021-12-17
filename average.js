
function average(numbers) {
  let sum = 0;
  let count = numbers.length;
  
  numbers.map((value,i) => {
    if(isNaN(val)){
      count -= 1;
    }
    else {
      sum += value;
    }
  })
  return (sum/count);
}

module.exports = {average};

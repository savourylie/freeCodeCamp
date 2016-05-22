
function sumFibs(num) {
  fibArr = fibGen(num);
  sumArr = [];

  for (i = 0; i < fibArr.length; i++) {
    if (isOdd(fibArr[i]) && fibArr[i] <= num) {
      sumArr.push(fibArr[i]);
    }
  }

  var total = sumArr.reduce(function(a, b) {
    return a + b;
  });

  console.log(sumArr)
  console.log(total)

  return total;
}

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }

  else {
    return false;
  }
}

function fibGen(num) {
  if (num === 1) {
    return [1];
  }

  else if (num === 2) {
    return [1, 1];
  }

  else {
    fibArr = [1, 1];


    while (fibArr[fibArr.length - 1] < num) {
      newFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
      fibArr.push(newFib);
    }

    return fibArr;
  }
}

sumFibs(4);
// sumFibs(1000);

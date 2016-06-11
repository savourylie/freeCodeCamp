function dropElements(arr, func) {
  var i = 0;

  while (!func(arr[i]) && arr.length > 1) {
      arr = arr.slice(i + 1);
  }

  if (!func(arr[0]) || arr[0] === undefined) {
    return [];
  }

  else {
    return arr;
  }

}

dropElements([1, 2, 3], function(n) {return n < 3; });
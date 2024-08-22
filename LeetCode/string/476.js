var findComplement = function (num) {
  const binary = num.toString(2);
  let result = "";
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) {
      result += 0;
    } else {
      result += 1;
    }
  }

  return parseInt(result, 2);
};

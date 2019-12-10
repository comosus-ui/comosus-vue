const range = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split(
  ""
);
const fromRange = range.slice(0, 10);
const toRange = range.slice(0);

export default value => {
  let decValue = value
    .split("")
    .reverse()
    .reduce(function(carry, digit, index) {
      if (fromRange.indexOf(digit) === -1)
        throw new Error("Invalid digit `" + digit + "` for base " + 10 + ".");
      return (carry += fromRange.indexOf(digit) * Math.pow(10, index));
    }, 0);

  let newValue = "";
  while (decValue > 0) {
    newValue = toRange[decValue % 62] + newValue;
    decValue = (decValue - (decValue % 62)) / 62;
  }
  return newValue || "0";
};

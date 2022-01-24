const reverseString = function(str) {
  const splittedStr = str.split("")
  const reversedStr = splittedStr.reverse()
  const joinedStr = reversedStr.join("")
  return joinedStr
};


// Do not edit below this line
module.exports = reverseString;

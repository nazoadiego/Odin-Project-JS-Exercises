const repeatString = function(message, times) {
  let finalMessage = '';
  for (let i = 0; i < times; i++) {
    finalMessage += message;
  };
  if (times < 0) { finalMessage = "ERROR" }
  return finalMessage;
};
// Do not edit below this line
module.exports = repeatString;

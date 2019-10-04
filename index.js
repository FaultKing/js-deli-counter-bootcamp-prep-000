function currentLine(queue) {
  if (!queue.length) {
    return "The line is currently empty."
  }
//.length it returns the number of elemnets held in an array,
  var katzDeliLine = []
  for (let i = 0, l = queue.length; i < l; i++) {
    katzDeliLine.push(`${i + 1}. ${queue[i]}`)
  }

  return `The line is currently: ${katzDeliLine.join(', ')}`
};
//.join acts like a separator. To separate the customers?!

function nowServing(queue) {
  if (!queue.length) {
    return "There is nobody waiting to be served!"
  }
// ! is single bang, making a statement false, even if true
// !! if a statement is true, stays true with the double bang.

  return `Currently serving ${queue.shift()}.`
  };

function takeANumber(queue, ) {
  queue.push("")

  //return `Welcome, ${name}. You are number ${queue.length} in line.`
  return `You are number ${queue.length} `


};

function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ` + (line.length) + ` in line.`
}

function nowServing(line) {
  if (line.length >= 1) {
    return `Currently serving ` + (line.shift()) + `.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
    if (line.length >= 1) {
      return `The line is currently: ${line[]} ` + (line.shift()) + `.`;
  } else {
    return `The line is currently empty.`
  }
 }

function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ` + (line.length) + ` in line.`
}

function nowServing(line, person) {
  if (line.length >= 1) {
    line.shift
  } else {
    return `There is nobody waiting to be served!`
  }
}

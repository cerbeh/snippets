export function UpdateCondition(name, cb) {
  return {
    action: name,
    check: cb
  }
}

export const answersMatch = (a, b) => {
  return a.answers.length !== b.answers.length ||
  a.answers.filter((aAnswer) => b.answers.find(
    bAnswer => bAnswer.answer == aAnswer.answer && bAnswer.accept == aAnswer.accept
  )).length !== a.answers.length
}

export const optionsMatch = (a, b, options) => options.every(option => a[option] === b[option])

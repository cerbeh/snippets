// const selector = number => {
//   const byThree = number => number % 3 === 0;
//   const byFive = number => number % 5 === 0;
//   const rest = number => !byThree(number) && !byFive(number);
//   return [rest(number), byThree(number), byFive(number)].indexOf(true);
// };
//
// const associatedWord = ['bing', 'pot', 'ding', 'dong', 'memorable', 'exciting', 'green', 'blue', 'red'];
//
// const fizzyarray = Array.from({ length: 100 }, (e,i) => associatedWord[selector(i)]);
//
// // console.log(fizzyarray);
//
//
// console.log((Math.random() > 0.5) ? 'm' : 'f')

const list = []

const arrayIndex = list.findIndex(e => e = 'words');

list[arrayIndex] = 'something'

list[0] = 'something else'

console.log('list', list)
console.log('list', list[0])
console.log('list', list[-1])

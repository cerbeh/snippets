const step1 = () => new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('step1')
    resolve('foo');
  }, 300);
});
const step2 = () => new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('step2')
    resolve('step 2');
  }, 300);
});
const step3 = () => new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('step3')
    resolve('step 3');
  }, 300);
});

step1()
  .then(() => step2())
  .then(() => step3());

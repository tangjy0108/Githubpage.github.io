console.clear(); console.log('Start');

window.addEventListener('click', function () {
  console.log('event 1');
});
window.addEventListener('click', function () {
  debugger;
  // click the ⏵ button to resume the JS code execution
  console.log('event 2');
});

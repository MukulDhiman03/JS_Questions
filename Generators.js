/*
Arrays stores values and utilizes memory.
*/

function* numberGen() {
  let i = 0;
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGen();
console.log(gen.next());

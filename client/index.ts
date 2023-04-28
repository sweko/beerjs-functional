// import { add2, makeAdder } from "../library/library";

import { applyOperation, applyToArray } from "../library/library";

// const a = 3;
// const b = 4;
// const c = 5;

// const offset = 4;

// const adder = makeAdder(offset)

// console.log(adder(a));
// console.log(adder(b));
// console.log(adder(c));

const source = [1, 2, 3, 4, 5, 6];

console.log(applyOperation(source, el => el * el));

console.log(applyOperation(source, el => el + el));

console.log(applyOperation(source, el => 3 * el + 1));


const square = (n: number) => n * n;

console.log(square(4));

const makeSquares = applyToArray(square);

console.log(makeSquares([5, 6, 7, 8]));
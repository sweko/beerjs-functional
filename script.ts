// export const makeAdder = function (inc: number) {
//     const addInc = (a: number) => {
//         return add(a, inc);
//     }
//     return addInc;
// }

// export const mysteryAdder = makeAdder(420);

// // one
// const source = [1, 2, 3, 4, 5, 6];

// const makeSquares = function (array: number[]) {
//     const result = [];
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         result.push(element * element);
//     }
//     return result;
// };

// const makeDoubles = function (array) {
//     const result = [];
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         result.push(element * 2);
//     }
//     return result;
// }

// const makePlusOne = function (array) {
//     const result = [];
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         result.push(element + 1);
//     }
//     return result;
// }


// const makeArray = function (array, operation) {
//     const result = [];
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         result.push(operation(element));
//     }
//     return result;
// }

// const squares = makeSquares(source);
// console.log(squares);

// const doubles = makeDoubles(source);
// console.log(doubles);

// const plusOnes = makePlusOne(source);
// console.log(plusOnes);


// const plusTwo = makeArray(source, function (number) { return number + 2 });
// console.log(plusTwo);

// const plusTwoTimesThree = makeArray(source, function (number) { return (number + 2) * 3 });
// console.log(plusTwoTimesThree);

// // two
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const evens = getItems(source, x => x % 2 === 0);
// console.log(evens);

// const odds = getItems(source,  x => x % 2 !== 0);
// console.log(odds);

// const between5and10 = getItems(source, x => x > 5 && x < 10);
// console.log(between5and10);

// function getItems(array, comparisson) {
//     const result = [];
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         if (comparisson(element)) {
//             result.push(element);
//         }
//     }
//     return result;
// }

// // three

// const makeArray = function (array, operation) {
//     const result = [];
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
//         result.push(operation(element));
//     }
//     return result;
// }

// const makeArrayFunction = function(operation){
//     return function (array) {
//         return makeArray(array, operation);
//     }
// }

// const array = [1, 9, 15, 4, 6, 3, 8];

// const makeSquares = makeArrayFunction(x => x * x);
// console.log(makeSquares(array));

// const makeDoubles = makeArrayFunction(x => x * 2);
// console.log(makeDoubles(array));

// const makePlusOne = makeArrayFunction(x => x + 1);
// console.log(makePlusOne(array));

// console.log(makeArrayFunction(x => x + 2)(array));
// console.log(makeArray(array, x => x + 2));
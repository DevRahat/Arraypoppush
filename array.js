
// Push(), pop(), shift() & unshift() method in javaScript.
let numbers=[12, 34, 56, 67];

numbers.pop();      //pop() Method will remove an array Element at the End position of that Array
console.log(numbers); //Output: [ 12, 34, 56 ]

numbers.push(70);  // push() method will add an array Element at the end position of that Array
console.log(numbers);   // output: [12, 34, 56, 67, 70]

numbers.shift();    //shift() method will remove an array Element at the start position of that Array
console.log(numbers);   //outPut: [ 34, 56, 67, 70 ]

numbers.unshift(11);    //unshift() method will add an array Element at the start index of an Array
console.log(numbers);   //Output: [ 11, 34, 56, 67, 70 ]


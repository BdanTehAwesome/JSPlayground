const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const alphaArray = ['A', 'B', 'C', 'D', 'E', 'F'];

const [a,,c, ...everythingElse] = numArray ;

console.log(a);
console.log(c);
console.log(everythingElse);
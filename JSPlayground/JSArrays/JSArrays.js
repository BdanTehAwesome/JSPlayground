const items = [
    {name: 'Test1', quantity: 10},
    {name: 'Test2', quantity: 20},
    {name: 'Test3', quantity: 30},
    {name: 'Test4', quantity: 40},
    {name: 'Test5', quantity: 50},
    {name: 'Test6', quantity: 60},
    {name: 'Test7', quantity: 70},
    {name: 'Test8', quantity: 80},
    {name: 'Test9', quantity: 90},
    {name: 'Test10', quantity: -30},
]

const filterItems = items.filter((item) => {
    return item.quantity <=50;
})
console.log('******** Filtered Array **********');
console.log(filterItems);
console.log('**********************************');

const mapItems = items.map((item) => {
    return item.name;
})
console.log('******** Map Array *********************');
console.log(mapItems);
console.log('*****************************************');

const findItems = items.find((item) => {
    return item.name === 'Test8';
})
console.log('******** Find Item in Array **********');
console.log(findItems);
console.log('***************************************');

console.log('******** Iterate over all items in Array **********');
items.forEach((item) => {
    console.log(item.name) ;
})
console.log('*****************************************************');

const hasLowItems = items.some((item) => {
    return item.quantity <= 50 ;
})
console.log('******** Find some items in Array that match criteria **********');
console.log(hasLowItems);
console.log('*****************************************************************');

const allMatch = items.every((item) => {
    return item.quantity <= 50 ;
})
console.log('******** check if every items in Array matches the criteria **********');
console.log(allMatch);
console.log('***********************************************************************');

const totalQuantity = items.reduce((currentTotal, item) => {
    return item.quantity + currentTotal;
}, 0) //<---Starting position
console.log('******** Total of a value in the array **********');
console.log(totalQuantity);
console.log('**************************************************');

const newItems = [1, 2, 3, 4, 5];
const includesNumber = newItems.includes(3);
console.log('******** Array contains a value **********');
console.log(includesNumber);
console.log('**************************************************');


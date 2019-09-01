import myCurrentLocation, { message, name, getGreeting } from './myModule';
// import myCurrentLocation from './myModule';

import addFunction, { subtractFunction } from './math';

console.log('hello GraphQL');

console.log(name, message, myCurrentLocation);
console.log(getGreeting('Sulaymon'));

console.log(addFunction(2, 4));
console.log(subtractFunction(2, 4));

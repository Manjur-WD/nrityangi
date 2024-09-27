document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
})

// Demo forEach
const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log('Fruits in the basket:');
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

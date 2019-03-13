const toppings = ['bacon', 'chilli'];

const newToppings = ['pepperoni'];

// Creates a copy of items in each source array
const allToppings = [...toppings, ...newToppings];

console.log(allToppings);

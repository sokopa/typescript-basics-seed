// Destructuring works on importing modules!!
// import { obj } from './utils';

const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni'],
};

function order({ name: pizzaName, toppings: pizzaToppings }) {
  return { pizzaName, pizzaToppings };
}

const { pizzaName } = order(pizza);

console.log(pizzaName);

const toppings = ['pepperoni', 'bacon', 'chilli'];
const [f, s, t] = toppings;

function logToppings([head, ...tail]: any) {
  console.log(head, tail);
}

logToppings(toppings);

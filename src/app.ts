class Pizza {
  toppings: string[] = [];

  constructor(private name: string) {} // shorthand to also declare private property

  // by default, all are public
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

console.log(pizza);

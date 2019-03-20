class Pizza {
  toppings: string[] = [];

  constructor(readonly name: string) {}

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

// pizza.name = 'x'; // not applicable
console.log(pizza.name);

type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);

console.log(serialized);

function getNameFromJSON(obj: string): string {
  // return (<Pizza>JSON.parse(obj)).name; // old way
  return (JSON.parse(obj) as Pizza).name; // preferred way
}

getNameFromJSON(serialized);

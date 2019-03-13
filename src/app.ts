let selectedTopping: string = 'pepperoni';

// returns void
function selectTopping(topping: string): void {
  selectedTopping = topping;
}

let result = selectTopping('bacon');

console.log(selectedTopping);
console.log('Result', result);

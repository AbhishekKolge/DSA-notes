const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla'));
console.log(beasts.includes('Nessie'));
console.log(beasts.findIndex((beast) => beast === 'Hydra'));
console.log(beasts.find((beast) => beast === 'Minotaur'));

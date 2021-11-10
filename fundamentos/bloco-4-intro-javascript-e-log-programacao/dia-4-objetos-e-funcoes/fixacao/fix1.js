// Fix - 1.1

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

// Fix - 1.2
console.log('A jogadora ' + player.name + ' tem ' + player.age + ' anos.');
// console.table(player);

// Fix - 1.3 

console.log('A jogadora ' + player.name + ' ' + player.lastName +  ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length);

// Fix - 1.4

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')
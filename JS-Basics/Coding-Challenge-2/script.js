var teamJohn = [
    89,
    120,
    103
];
console.log('John\'s Team Scores:', teamJohn)

var teamMike = [
    116,
    94, 
    123
];

console.log('Mike\'s Team Scores:', teamMike)

var teamJohnAvg = (89 + 120 + 103)/teamJohn.length;
console.log('John\'s Team Average:', teamJohnAvg)

var teamMikeAvg = (116 + 94 + 123)/teamMike.length;
console.log('Mike\'s Team Average:', teamMikeAvg)

if (teamMikeAvg > teamJohnAvg) {
    console.log ('Mike\'s team won by an average of ' + (teamMikeAvg - teamJohnAvg) + ' points.')
} else {
    console.log('John\'s team won by an average of ' + (teamJohnAvg - teamMikeAvg) + ' points.');
} 
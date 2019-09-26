var billAmounts = [
    124,
    48,
    268
];

function tipCaluclator(bill) {
    if (bill < 50) {
        percentage = (20/100);
    } else if (bill >= 50 && bill < 200) {
        percentage = (15/100);
    } else { 
        percentage = (10/100);
    }
    return percentage * bill;
    // var tip = percentage * bill;
    // //return tip amount to 2 decimal places
    // return tip.toFixed(2);
};

// for (i = 0; i>billAmounts.length; i++) {
//     var tips = tipCaluclator(billAmounts)
// }
// console.log(tips)

var tips = [
    tipCaluclator(billAmounts[0]),
    tipCaluclator(billAmounts[1]),
    tipCaluclator(billAmounts[2])
];
console.log('These are the tip amounts: ', tips)

var roundedTips = [
    tips[0].toFixed(2),
    tips[1].toFixed(2),
    tips[2].toFixed(2)
];

var roundedTipsFormat =
    roundedTips.join(', $');

console.log(roundedTips);

var finalAmounts = [
    billAmounts[0] + tips[0],
    billAmounts[1] + tips[1],
    billAmounts[2] + tips[2]
];

var finalAmountsFormat = 
    finalAmounts.join(', $');

console.log('These are the full amounts: ', finalAmounts);

document.getElementById('tipAmount').innerHTML="Tip Amounts: " + roundedTipsFormat;
document.getElementById('fullAmount').innerHTML="Total Amount Paid: " + finalAmountsFormat;
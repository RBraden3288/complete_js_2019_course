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
    var tip = percentage * bill;
    //return tip amount to 2 decimal places
    return tip.toFixed(2);
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

var htmlTips = document.getElementById('tipAmount').innerHTML="Tip Amounts: " + tips;


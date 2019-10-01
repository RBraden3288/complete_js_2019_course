var john = {
    patron: 'John',
    bills: [
        124,
        48,
        180,
        268,
        42
    ],
    tips: [],
    finalBills: []
}

function calculateTip(bill) {
    if (bill < 50) {
        percentage = (20 / 100);
    } else if (bill >= 50 && bill < 200) {
        percentage = (15 / 100);
    } else {
        percentage = (10 / 100);
    }
    return percentage * bill;
};

// console.log(john.bills.length);

for (var i = 0; i < john.bills.length; i++) {
    var bill = john.bills[i];
    console.log(bill);

    var tips = calculateTip(bill);
    var roundedTips = parseFloat(tips.toFixed(2));
    //push to tips array
    john.tips.push(roundedTips);
    console.log('These are the tip amounts: ', roundedTips)

    var finalBill = (roundedTips + bill);
    console.log('Final amounts: ', finalBill)
    // push to final bill array
    john.finalBills.push(finalBill);
};

console.log(john);

var addDollarSign = {
    bills: john.bills.join(', $'),
    tips: john.tips.join(', $'),
    finalBill: john.finalBills.join(', $')
};
// console.log(addDollarSign);

var billToString = $('.john-bills').text('John\'s bills were for the following amounts: $' + addDollarSign.bills + '.');
var tipsToString = $('.john-tips').text('John tipped the following amounts on the bills above: $' + addDollarSign.tips + '.');
var finalBillToString = $('.john-final').text('John\'s final totals are as follows: $' + addDollarSign.finalBill +'.');
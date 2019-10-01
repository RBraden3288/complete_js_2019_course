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
    var roundedTips = tips.toFixed(2);
    john.tips.push(roundedTips);
    console.log('These are the tip amounts: ', roundedTips)

    var finalBill = (roundedTips + bill);
    console.log('Final amounts: ', finalBill)
};

console.log(john)
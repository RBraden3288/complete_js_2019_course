// mass in kg, height in meters

var mark = {
    fullName: "Mark Foo",
    mass: 71,
    height: 1.7
};

var john = {
    fullName: "John Bar",
    mass: 75,
    height: 1.68
};

function calculateBMI(mass, height) {
    var bmi = mass / (height * height);
    return bmi;
};

var johnBMI= calculateBMI(john.mass, john.height).toFixed(2);
console.log('John\'s BMI is: ', johnBMI);

var markBMI= calculateBMI(mark.mass, mark.height).toFixed(2);
console.log('Mark\'s BMI is: ', markBMI);

if (johnBMI > markBMI) {
    console.log('John\'s BMI is more than Mark\'s BMI by', (johnBMI - markBMI).toFixed(2));
} else if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is more than John\'s BMI by', (markBMI - johnBMI).toFixed(2));
} else {
    console.log('Mark and John have the same BMI');
};

//push each BMI to person's object
john.bmi = johnBMI;
mark.bmi= markBMI;
console.log(john, mark);
const mark = {
    fullName: 'Mark miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
    }

};

const john = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height * this.height));
        console.log(this.bmi);
        return this.bmi;
    }
};


if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s  BMI (${john.calcBMI()})is higher than ${mark.fullName} 's (${mark.calcBMI()}) `);

} else {
    console.log(`${mark.fullName}'s  BMI (${mark.calcBMI()})is higher than ${john.fullName} 's (${john.calcBMI()}) `);
}
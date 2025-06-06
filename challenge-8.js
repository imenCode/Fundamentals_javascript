let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = bill => {
    const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    return tip;
}


for (let i = 0; i < bills.length; i++) {

    let tip = calcTip(bills[i]);
    tips.push(tip);
    let total = tip + bills[i];

    totals.push(total);

}
console.log(totals);

const calcAverage = (arr) => {
    let sum = 0;

    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    let average = sum / arr.length;
    console.log(average);
    return average;
}

calcAverage(totals);


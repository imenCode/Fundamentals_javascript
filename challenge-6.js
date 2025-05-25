



const calcTip = bill => {
    const tip = (bill >= 50 && bill <= 300) ? 0.15 : 0.2;
    return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills.length - 1)];

const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(tips);
console.log(totals);


// version en dessous qui a ete considere comme correcte

/* const calcTip = bill => {
    const tip = (bill >= 50 && bill <= 300) ? 0.15 : 0.2;
    const tipResult = bill*tip
    return tipResult;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(125), calcTip(555), calcTip(44)];

const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(tips);
console.log(totals); */
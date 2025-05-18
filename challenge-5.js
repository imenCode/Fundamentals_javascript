'use strict';

const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3

    console.log(`moyenne: ${average}`);
    return average;

};

const scoreDolphins = calcAverage(44, 23, 71);

const scoreKoalas = calcAverage(65, 54, 49);



const checkWinner = function (scoreDolphins, scoreKoalas) {

    if (scoreDolphins > (2 * scoreKoalas)) {
        console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas})`);
    } else if (scoreKoalas > (2 * scoreDolphins)) {
        console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`);
    } else {
        console.log("No team wins...");
    }

}

checkWinner(scoreDolphins, scoreKoalas);
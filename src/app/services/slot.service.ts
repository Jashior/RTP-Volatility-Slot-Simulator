import { Injectable } from '@angular/core';
import { volatility } from 'src/app/models/volatility';

interface slot {
  LOW: number[][];
  MEDIUM: number[][];
  HIGH: number[][];
}

@Injectable({
  providedIn: 'root',
})
export class SlotService {
  // slot: VOLATILITY : [[cumulative probability][payout as multiplier of RTP]]
  prob: slot = {
    LOW: [
      [0.6, 0.8, 0.9, 0.95, 0.98, 0.99, 0.994, 0.997, 0.999, 1],
      [0, 0.75, 1.5, 2, 5, 15, 20, 30, 40, 50],
    ],
    MEDIUM: [
      [
        0.8, 0.9, 0.95, 0.99, 0.995, 0.998, 0.999, 0.9995, 0.9998, 0.9999,
        0.99995, 0.99997, 1,
      ],
      [0, 1, 2, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000],
    ],
    HIGH: [
      [
        0.8, 0.95, 0.98, 0.99, 0.995, 0.998, 0.999, 0.9995, 0.9998, 0.9999,
        0.99995, 0.99998, 0.99999, 0.999995, 0.999998, 0.999999, 0.9999999, 1,
      ],
      [
        0, 1, 2, 4, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000,
        50000, 100000, 200000,
      ],
    ],
  };

  constructor() {}

  test(w: number, bet: number, rtp: number, vol: volatility) {
    console.log(`Volatility ${vol}, Wealth ${w}, Bet ${bet}, RTP ${rtp}`);
    let currW = w;
    let currentBet = bet;
    let cumulativeProbabilities = this.prob[vol][0];
    let payoutMultipliers = this.prob[vol][1];
    let betHistory = [];
    let nRounds = 0;

    while (currW > 0 && nRounds <= 25000) {
      currentBet = bet;
      nRounds++;

      if (currentBet > currW) {
        currentBet = currW;
      }

      currW = currW - currentBet;

      // random number 0 -> 1
      let r = Math.random();
      // Finds first cumulative probability that's greater than random number
      let upper = cumulativeProbabilities.find((e) => e > r);
      // Extracts position
      let position =
        upper == undefined ? 0 : cumulativeProbabilities.indexOf(upper);
      // Uses position to find payout multiplier in payout multiplier array
      let payout = currentBet * payoutMultipliers[position] * (rtp / 100);
      console.log(
        `payout: ${payout} ( bet ${currentBet} * multiplier ${
          payoutMultipliers[position] * (rtp / 100)
        })`
      );

      currW = Number((currW + Number(payout)).toFixed(2));
      betHistory.push(currW);
    }

    console.log(betHistory);
    return betHistory;
  }
}

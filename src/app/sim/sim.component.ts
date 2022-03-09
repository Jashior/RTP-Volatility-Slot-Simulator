import { Component, OnInit } from '@angular/core';

enum volatility {
  'LOW' = 1,
  'MEDIUM',
  'HIGH',
}

@Component({
  selector: 'app-sim',
  templateUrl: './sim.component.html',
  styleUrls: ['./sim.component.css'],
})
export class SimComponent implements OnInit {
  startWealth: number = 50;
  betSize: number = 1;
  currentWealth: number = this.startWealth;
  rtp: number = 97; // Return to player %
  vol: volatility = volatility.LOW;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { volatility } from '../models/volatility';
import { SlotService } from '../services/slot.service';

@Component({
  selector: 'app-sim',
  templateUrl: './sim.component.html',
  styleUrls: ['./sim.component.css'],
})
export class SimComponent implements OnInit {
  startWealth: number = 50;
  betSize: number = 1.0;
  rtp: number = 97.0; // Return to player %
  vol: volatility = volatility.MEDIUM;
  loading: boolean = false;

  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');
  formatterDollar = (value: number): string => `$ ${value}`;
  parserDollar = (value: string): string => value.replace('$ ', '');

  constructor(private slotService: SlotService) {}

  ngOnInit(): void {}

  runSim() {
    this.slotService.test(this.startWealth, this.betSize, this.rtp, this.vol);
  }

  ensureBetLowerThanWealth() {
    if (this.betSize > this.startWealth) {
      this.betSize = this.startWealth;
    }
  }
}

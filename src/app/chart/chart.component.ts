import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

// ...

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() result: number[] = [];
  chartOption: EChartsOption = {};

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.loadChartOptions();
  }

  loadChartOptions() {
    this.chartOption = {
      xAxis: {
        name: 'Rounds',
        type: 'category',
        data: this.result.map((e, i) => i),
      },
      yAxis: {
        name: 'Wealth',
        type: 'value',
      },
      series: [
        {
          data: this.result,
          type: 'line',
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
    };
  }
}

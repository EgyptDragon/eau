import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ChartComponent, NgApexchartsModule, ApexPlotOptions } from 'ng-apexcharts';
import { fadeInAnimation } from 'src/app/app-frame/animation';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle;
};

@Component({
  standalone: true,
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  imports: [NgApexchartsModule],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class DashboardPageComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions | any>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: ["Paris", "Lyon",  "Lille",  "truc",  "truc",  "truc",  "truc",  "truc", "truc"]
      },
      plotOptions: {
        bar: {
            distributed: true,
            barHeight: '85%',
        },
        style:{
          colors: [
            "#83D0CB",
            "#83D0CB",
            "#A8C7FA",
            "#92CCDE",
            "#83D0CB",
            "#83D0CB",
            "#A8C7FA",
            "#92CCDE",
            "#83D0CB",
            "#83D0CB"
        ],
        }

      },

    };
  }
}

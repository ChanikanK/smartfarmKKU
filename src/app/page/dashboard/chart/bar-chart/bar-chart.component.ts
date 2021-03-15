import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Label, ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() dataset = '';
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  barChartLabels: any = [];
  barChartLegend = true;
  pieChartColor: any = [
    {
      backgroundColor: [
        'rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)',
      ],
    },
  ];
  barChartData: any = [
    {
      data: [],
    },
  ];

  constructor(private httpService: HttpClient) {}

  ngOnInit() {
    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011'];
    this.httpService.get(this.dataset, { responseType: 'json' }).subscribe(
      (data) => {
    console.log("🚀 ~ file: bar-chart.component.ts ~ line 42 ~ BarChartComponent ~ ngOnInit ~ this.dataset", this.dataset)
        console.log(
          '🚀 ~ file: bar-chart.component.ts ~ line 42 ~ BarChartComponent ~ ngOnInit ~ data',
          data
        );
        this.barChartData = data as any[]; // FILL THE CHART ARRAY WITH DATA.
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}

import { Label } from 'ng2-charts';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart-time',
  templateUrl: './line-chart-time.component.html',
  styleUrls: ['./line-chart-time.component.scss'],
})
export class LineChartTimeComponent implements OnInit {
  @Input() dataArr: any = [];
  @Input() labelArr: any = [];

  lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  lineChartLabels: any = [];
  lineChartLegend = true;

  colours: any = [
    {
      backgroundColor:' rgba(140,204,12,0.6)',
    },
  ];
  lineChartData: any = [
    {
      data: ['2006', '2007', '2008', '2009', '2010', '2010'],
      label: 'label',
    },
  ];

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.lineChartLabels = this.labelArr;
    this.lineChartData = this.dataArr as any[];
  }
}

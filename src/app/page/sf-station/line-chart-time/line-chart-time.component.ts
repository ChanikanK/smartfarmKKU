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
  // lineChartColor: any = [
  //   {
  //     backgroundColor: [
  //       'rgba(30, 169, 224, 0.8)',
  //       'rgba(255,165,0,0.9)',
  //       'rgba(139, 136, 136, 0.9)',
  //       'rgba(255, 161, 181, 0.9)',
  //       'rgba(255, 102, 0, 0.9)',
  //     ],
  //   },
  // ];
  lineChartData: any = [
    {
      data: ['2006', '2007', '2008', '2009', '2010', '2010'],
      label: 'label',
      colours: [{ // default
        fillColor: "rgba(0, 108, 112, 1)",
        "strokeColor": "rgba(207,100,103,1)",
        "pointColor": "rgba(220,220,220,1)",
        "pointStrokeColor": "#fff",
        "pointHighlightFill": "#fff",
        "pointHighlightStroke": "rgba(151,187,205,0.8)"
      }]

    },
  ];

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.lineChartLabels = this.labelArr;
    this.lineChartData = this.dataArr as any[];
  }
}

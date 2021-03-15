import { Label } from 'ng2-charts';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart-time',
  templateUrl: './line-chart-time.component.html',
  styleUrls: ['./line-chart-time.component.scss'],
})
export class LineChartTimeComponent implements OnInit {
  @Input() dataset = '';
  @Input() dataArr: any = [];
  lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  lineChartLabels: any = [];
  lineChartLegend = true;
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
  lineChartData: any = [
    {
      data: ['2006', '2007', '2008', '2009', '2010', '2010'],
      label: 'Hellooo',
    },
  ];

  constructor(private httpService: HttpClient) {}

  ngOnInit(): void {
    this.lineChartLabels = [
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
    ];

    this.lineChartData = this.dataArr as any[];
  }
}

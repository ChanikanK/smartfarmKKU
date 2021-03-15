import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartTimeComponent } from './line-chart-time.component';

describe('LineChartTimeComponent', () => {
  let component: LineChartTimeComponent;
  let fixture: ComponentFixture<LineChartTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

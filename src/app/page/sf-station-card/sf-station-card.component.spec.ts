import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfStationCardComponent } from './sf-station-card.component';

describe('SfStationCardComponent', () => {
  let component: SfStationCardComponent;
  let fixture: ComponentFixture<SfStationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfStationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfStationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

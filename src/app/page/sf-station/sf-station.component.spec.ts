import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfStationComponent } from './sf-station.component';

describe('SfStationComponent', () => {
  let component: SfStationComponent;
  let fixture: ComponentFixture<SfStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

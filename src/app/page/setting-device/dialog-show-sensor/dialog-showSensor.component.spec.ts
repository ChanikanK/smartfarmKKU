import { DialogShowSensorComponent } from './dialog-showSensor.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('DialogShowSensorComponent', () => {
  let component: DialogShowSensorComponent;
  let fixture: ComponentFixture<DialogShowSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogShowSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogShowSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

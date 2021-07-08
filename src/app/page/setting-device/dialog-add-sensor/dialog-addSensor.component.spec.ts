import { DialogAddSensorComponent } from './dialog-addSensor.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('DialogAddSensorComponent', () => {
  let component: DialogAddSensorComponent;
  let fixture: ComponentFixture<DialogAddSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { DialogAddEntityToFarmComponent } from './dialog-addEntityTofarm.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('DialogAddSensorComponent', () => {
  let component: DialogAddEntityToFarmComponent;
  let fixture: ComponentFixture<DialogAddEntityToFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEntityToFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddEntityToFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

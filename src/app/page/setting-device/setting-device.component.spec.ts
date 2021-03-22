import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingDeviceComponent } from './setting-device.component';

describe('SettingDeviceComponent', () => {
  let component: SettingDeviceComponent;
  let fixture: ComponentFixture<SettingDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

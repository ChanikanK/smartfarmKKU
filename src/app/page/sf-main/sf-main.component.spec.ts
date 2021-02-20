import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfMainComponent } from './sf-main.component';

describe('SfMainComponent', () => {
  let component: SfMainComponent;
  let fixture: ComponentFixture<SfMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

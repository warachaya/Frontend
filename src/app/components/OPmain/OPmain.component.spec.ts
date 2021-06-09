import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPmainComponent } from './OPmain.component';

describe('OPmainComponent', () => {
  let component: OPmainComponent;
  let fixture: ComponentFixture<OPmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

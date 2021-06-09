import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmenuComponent } from './Opmenu.component';

describe('OpmenuComponent', () => {
  let component: OpmenuComponent;
  let fixture: ComponentFixture<OpmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

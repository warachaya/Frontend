import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidsaleComponent } from './paidsale.component';

describe('PaidsaleComponent', () => {
  let component: PaidsaleComponent;
  let fixture: ComponentFixture<PaidsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

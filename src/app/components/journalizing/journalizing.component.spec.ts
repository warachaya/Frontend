import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JournalizingComponent } from './journalizing.component';


describe('JournalizingComponent', () => {
  let component: JournalizingComponent;
  let fixture: ComponentFixture<JournalizingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalizingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




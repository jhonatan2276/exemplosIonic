import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SemdButtonComponent } from './semd-button.component';

describe('SemdButtonComponent', () => {
  let component: SemdButtonComponent;
  let fixture: ComponentFixture<SemdButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemdButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent] // استدعاء الـ standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // لتطبيق التغييرات الأولية
    await fixture.whenStable(); // انتظار أي Promises/observables
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

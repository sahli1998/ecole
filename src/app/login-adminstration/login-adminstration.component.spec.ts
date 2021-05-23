import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminstrationComponent } from './login-adminstration.component';

describe('LoginAdminstrationComponent', () => {
  let component: LoginAdminstrationComponent;
  let fixture: ComponentFixture<LoginAdminstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAdminstrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdminstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

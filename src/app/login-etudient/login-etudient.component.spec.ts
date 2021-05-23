import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEtudientComponent } from './login-etudient.component';

describe('LoginEtudientComponent', () => {
  let component: LoginEtudientComponent;
  let fixture: ComponentFixture<LoginEtudientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEtudientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEtudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

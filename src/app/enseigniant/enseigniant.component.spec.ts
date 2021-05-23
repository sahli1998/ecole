import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseigniantComponent } from './enseigniant.component';

describe('EnseigniantComponent', () => {
  let component: EnseigniantComponent;
  let fixture: ComponentFixture<EnseigniantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseigniantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseigniantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

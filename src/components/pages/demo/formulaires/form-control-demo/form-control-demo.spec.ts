import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlDemo } from './form-control-demo';

describe('FormControlDemo', () => {
  let component: FormControlDemo;
  let fixture: ComponentFixture<FormControlDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

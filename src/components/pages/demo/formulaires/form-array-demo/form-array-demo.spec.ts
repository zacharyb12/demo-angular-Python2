import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayDemo } from './form-array-demo';

describe('FormArrayDemo', () => {
  let component: FormArrayDemo;
  let fixture: ComponentFixture<FormArrayDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArrayDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

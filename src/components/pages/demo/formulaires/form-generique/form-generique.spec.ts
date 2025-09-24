import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenerique } from './form-generique';

describe('FormGenerique', () => {
  let component: FormGenerique;
  let fixture: ComponentFixture<FormGenerique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGenerique]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGenerique);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

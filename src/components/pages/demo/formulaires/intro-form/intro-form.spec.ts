import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroForm } from './intro-form';

describe('IntroForm', () => {
  let component: IntroForm;
  let fixture: ComponentFixture<IntroForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

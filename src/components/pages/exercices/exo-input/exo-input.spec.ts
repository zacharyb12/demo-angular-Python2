import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoInput } from './exo-input';

describe('ExoInput', () => {
  let component: ExoInput;
  let fixture: ComponentFixture<ExoInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

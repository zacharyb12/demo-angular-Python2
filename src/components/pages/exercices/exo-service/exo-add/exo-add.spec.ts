import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoAdd } from './exo-add';

describe('ExoAdd', () => {
  let component: ExoAdd;
  let fixture: ComponentFixture<ExoAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

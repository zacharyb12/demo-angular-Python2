import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoInputEnfant } from './exo-input-enfant';

describe('ExoInputEnfant', () => {
  let component: ExoInputEnfant;
  let fixture: ComponentFixture<ExoInputEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoInputEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoInputEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

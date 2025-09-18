import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoInputBindingsEnfant } from './exo-input-bindings-enfant';

describe('ExoInputBindingsEnfant', () => {
  let component: ExoInputBindingsEnfant;
  let fixture: ComponentFixture<ExoInputBindingsEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoInputBindingsEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoInputBindingsEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

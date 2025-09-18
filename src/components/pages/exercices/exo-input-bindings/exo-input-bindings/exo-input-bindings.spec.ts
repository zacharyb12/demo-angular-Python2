import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoInputBindings } from './exo-input-bindings';

describe('ExoInputBindings', () => {
  let component: ExoInputBindings;
  let fixture: ComponentFixture<ExoInputBindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoInputBindings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoInputBindings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

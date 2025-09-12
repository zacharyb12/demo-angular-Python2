import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoBindings } from './exo-bindings';

describe('ExoBindings', () => {
  let component: ExoBindings;
  let fixture: ComponentFixture<ExoBindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoBindings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoBindings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

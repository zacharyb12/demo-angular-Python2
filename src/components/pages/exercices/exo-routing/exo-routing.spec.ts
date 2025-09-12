import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoRouting } from './exo-routing';

describe('ExoRouting', () => {
  let component: ExoRouting;
  let fixture: ComponentFixture<ExoRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

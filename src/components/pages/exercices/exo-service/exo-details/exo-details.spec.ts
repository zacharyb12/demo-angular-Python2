import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoDetails } from './exo-details';

describe('ExoDetails', () => {
  let component: ExoDetails;
  let fixture: ComponentFixture<ExoDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

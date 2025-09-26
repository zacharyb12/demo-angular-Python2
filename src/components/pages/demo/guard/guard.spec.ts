import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guard } from './guard';

describe('Guard', () => {
  let component: Guard;
  let fixture: ComponentFixture<Guard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

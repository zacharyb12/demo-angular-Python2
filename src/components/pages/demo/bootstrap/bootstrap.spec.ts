import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootstrap } from './bootstrap';

describe('Bootstrap', () => {
  let component: Bootstrap;
  let fixture: ComponentFixture<Bootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bootstrap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

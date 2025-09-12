import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRouter } from './home-router';

describe('HomeRouter', () => {
  let component: HomeRouter;
  let fixture: ComponentFixture<HomeRouter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRouter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRouter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

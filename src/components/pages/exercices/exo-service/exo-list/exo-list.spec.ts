import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoList } from './exo-list';

describe('ExoList', () => {
  let component: ExoList;
  let fixture: ComponentFixture<ExoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

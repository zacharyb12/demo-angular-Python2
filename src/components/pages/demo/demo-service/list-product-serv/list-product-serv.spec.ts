import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductServ } from './list-product-serv';

describe('ListProductServ', () => {
  let component: ListProductServ;
  let fixture: ComponentFixture<ListProductServ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductServ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductServ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

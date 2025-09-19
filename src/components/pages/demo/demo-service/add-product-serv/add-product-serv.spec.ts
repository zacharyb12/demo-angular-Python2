import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductServ } from './add-product-serv';

describe('AddProductServ', () => {
  let component: AddProductServ;
  let fixture: ComponentFixture<AddProductServ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductServ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductServ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

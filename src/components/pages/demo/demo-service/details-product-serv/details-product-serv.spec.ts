import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductServ } from './details-product-serv';

describe('DetailsProductServ', () => {
  let component: DetailsProductServ;
  let fixture: ComponentFixture<DetailsProductServ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsProductServ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProductServ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

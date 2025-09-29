import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequest } from './http-request';

describe('HttpRequest', () => {
  let component: HttpRequest;
  let fixture: ComponentFixture<HttpRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

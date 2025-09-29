import { TestBed } from '@angular/core/testing';

import { HttpReq } from './http-req';

describe('HttpReq', () => {
  let service: HttpReq;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpReq);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

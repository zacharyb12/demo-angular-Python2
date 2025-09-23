import { TestBed } from '@angular/core/testing';

import { ServiceExo } from './service-exo';

describe('ServiceExo', () => {
  let service: ServiceExo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { childGuard } from './child-guard';

describe('childGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => childGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

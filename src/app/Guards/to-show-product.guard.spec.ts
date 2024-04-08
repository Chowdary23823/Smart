import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { toShowProductGuard } from './CanActivateChildProductGuard';

describe('toShowProductGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => toShowProductGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CachedHttpClient } from './cached-http.service';

describe('CachedHttpClient', () => {
  let service: CachedHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachedHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WishlinkService } from './wishlink.service';

describe('WishlinkService', () => {
  let service: WishlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

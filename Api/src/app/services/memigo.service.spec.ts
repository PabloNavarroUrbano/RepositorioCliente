import { TestBed } from '@angular/core/testing';

import { MemigoService } from './memigo.service';

describe('MemigoService', () => {
  let service: MemigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GithubTwoService } from './github-two.service';

describe('GithubTwoService', () => {
  let service: GithubTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

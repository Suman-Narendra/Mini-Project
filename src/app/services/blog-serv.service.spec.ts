import { TestBed } from '@angular/core/testing';

import { BlogServService } from './blog-serv.service';

describe('BlogServService', () => {
  let service: BlogServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

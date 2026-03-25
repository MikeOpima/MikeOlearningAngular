import { TestBed } from '@angular/core/testing';

import { NamePipe } from './name.pipe';

describe('NamePipe', () => {
  let service: NamePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamePipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

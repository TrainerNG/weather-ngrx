import { TestBed } from '@angular/core/testing';

import { Weathereffects } from './weathereffects';

describe('Weathereffects', () => {
  let service: Weathereffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Weathereffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

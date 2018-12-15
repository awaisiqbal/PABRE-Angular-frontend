import { TestBed } from '@angular/core/testing';

import { PabreService } from './pabre.service';

describe('PabreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PabreService = TestBed.get(PabreService);
    expect(service).toBeTruthy();
  });
});

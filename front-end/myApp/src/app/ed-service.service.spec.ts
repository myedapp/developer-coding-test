import { TestBed } from '@angular/core/testing';

import { EdServiceService } from './ed-service.service';

describe('EdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdServiceService = TestBed.get(EdServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FrozTeaTechService } from './FrozTeaTech.service';

describe('FrozTeaTechService', () => {
  let service: FrozTeaTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrozTeaTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

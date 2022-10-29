import { TestBed } from '@angular/core/testing';

import { ArgoniusUiService } from './argonius-ui.service';

describe('ArgoniusUiService', () => {
  let service: ArgoniusUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgoniusUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

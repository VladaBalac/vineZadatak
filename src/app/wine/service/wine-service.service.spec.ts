import { TestBed, inject } from '@angular/core/testing';

import { WineServiceService } from './wine-service.service';

describe('WineServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WineServiceService]
    });
  });

  it('should be created', inject([WineServiceService], (service: WineServiceService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NetworkServiceService } from './network-service.service';

describe('NetworkServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkServiceService]
    });
  });

  it('should ...', inject([NetworkServiceService], (service: NetworkServiceService) => {
    expect(service).toBeTruthy();
  }));
});

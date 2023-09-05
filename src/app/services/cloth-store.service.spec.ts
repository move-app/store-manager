import { TestBed } from '@angular/core/testing';

import { ClothStoreService } from './cloth-store.service';

describe('ClothStoreService', () => {
  let service: ClothStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

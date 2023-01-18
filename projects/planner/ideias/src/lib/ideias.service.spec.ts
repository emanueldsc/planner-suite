import { TestBed } from '@angular/core/testing';

import { IdeiasService } from './ideias.service';

describe('IdeiasService', () => {
  let service: IdeiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

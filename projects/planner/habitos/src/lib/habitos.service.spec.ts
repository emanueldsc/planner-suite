import { TestBed } from '@angular/core/testing';

import { HabitosService } from './habitos.service';

describe('HabitosService', () => {
  let service: HabitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

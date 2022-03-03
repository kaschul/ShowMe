import { TestBed } from '@angular/core/testing';

import { TvMazeArrayService } from './tv-maze-array.service';

describe('TvMazeArrayService', () => {
  let service: TvMazeArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvMazeArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

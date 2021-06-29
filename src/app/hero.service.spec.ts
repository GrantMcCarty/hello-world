import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return heroes', () =>{
    expect(service.getHeroes()).toBeTruthy();
  });

  it('should return a specific hero', () =>{
    expect(service.getHero(1)).toBeTruthy();
  });
  
});

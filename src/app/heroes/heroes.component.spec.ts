import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get heroes', () => {
    component.getHeroes();
    expect(component.heroes).toBeTruthy();
    expect(component.heroes.length).toBe(10);
  });
  it('should have heroes data', () => {
    component.getHeroes();
    expect(component.heroes).toBeTruthy();
    expect(component.heroes[0].name).toBe('Dr Nice');
    expect(component.heroes[2].power).toBe(900);
  });
});

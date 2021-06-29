import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      paramMap: {
        get(): string {
          return "123";
        }
      }
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

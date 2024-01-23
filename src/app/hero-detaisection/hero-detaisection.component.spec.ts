import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetaisectionComponent } from './hero-detaisection.component';

describe('HeroDetaisectionComponent', () => {
  let component: HeroDetaisectionComponent;
  let fixture: ComponentFixture<HeroDetaisectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDetaisectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroDetaisectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeCheckComponent } from './marquee-check.component';

describe('MarqueeCheckComponent', () => {
  let component: MarqueeCheckComponent;
  let fixture: ComponentFixture<MarqueeCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueeCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

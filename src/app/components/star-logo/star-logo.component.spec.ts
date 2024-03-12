import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarLogoComponent } from './star-logo.component';

describe('StarLogoComponent', () => {
  let component: StarLogoComponent;
  let fixture: ComponentFixture<StarLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

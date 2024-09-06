import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewformcomponentComponent } from './reviewformcomponent.component';

describe('ReviewformcomponentComponent', () => {
  let component: ReviewformcomponentComponent;
  let fixture: ComponentFixture<ReviewformcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewformcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

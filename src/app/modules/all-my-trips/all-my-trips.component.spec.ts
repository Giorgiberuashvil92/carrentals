import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyTripsComponent } from './all-my-trips.component';

describe('AllMyTripsComponent', () => {
  let component: AllMyTripsComponent;
  let fixture: ComponentFixture<AllMyTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMyTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

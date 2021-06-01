import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallDetailComponent } from './dragon-ball-detail.component';

describe('DragonBallDetailComponent', () => {
  let component: DragonBallDetailComponent;
  let fixture: ComponentFixture<DragonBallDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonBallDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonBallDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

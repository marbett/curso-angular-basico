import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallMainComponent } from './dragon-ball-main.component';

describe('DragonBallMainComponent', () => {
  let component: DragonBallMainComponent;
  let fixture: ComponentFixture<DragonBallMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonBallMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonBallMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

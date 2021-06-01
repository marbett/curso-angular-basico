import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallAddComponent } from './dragon-ball-add.component';

describe('DragonBallAddComponent', () => {
  let component: DragonBallAddComponent;
  let fixture: ComponentFixture<DragonBallAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonBallAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonBallAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

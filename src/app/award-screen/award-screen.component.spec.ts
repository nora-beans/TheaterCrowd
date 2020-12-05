import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardScreenComponent } from './award-screen.component';

describe('AwardScreenComponent', () => {
  let component: AwardScreenComponent;
  let fixture: ComponentFixture<AwardScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

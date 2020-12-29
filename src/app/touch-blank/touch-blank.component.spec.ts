import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchBlankComponent } from './touch-blank.component';

describe('TouchBlankComponent', () => {
  let component: TouchBlankComponent;
  let fixture: ComponentFixture<TouchBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

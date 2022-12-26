import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssmentloginComponent } from './assmentlogin.component';

describe('AssmentloginComponent', () => {
  let component: AssmentloginComponent;
  let fixture: ComponentFixture<AssmentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssmentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssmentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

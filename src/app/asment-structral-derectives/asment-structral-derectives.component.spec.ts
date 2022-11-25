import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmentStructralDerectivesComponent } from './asment-structral-derectives.component';

describe('AsmentStructralDerectivesComponent', () => {
  let component: AsmentStructralDerectivesComponent;
  let fixture: ComponentFixture<AsmentStructralDerectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmentStructralDerectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmentStructralDerectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

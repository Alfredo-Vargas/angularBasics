import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootcomponent1Component } from './bootcomponent1.component';

describe('Bootcomponent1Component', () => {
  let component: Bootcomponent1Component;
  let fixture: ComponentFixture<Bootcomponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bootcomponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bootcomponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

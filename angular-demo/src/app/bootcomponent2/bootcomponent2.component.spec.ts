import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootcomponent2Component } from './bootcomponent2.component';

describe('Bootcomponent2Component', () => {
  let component: Bootcomponent2Component;
  let fixture: ComponentFixture<Bootcomponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bootcomponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bootcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

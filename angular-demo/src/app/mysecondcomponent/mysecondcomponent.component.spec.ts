import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysecondcomponentComponent } from './mysecondcomponent.component';

describe('MysecondcomponentComponent', () => {
  let component: MysecondcomponentComponent;
  let fixture: ComponentFixture<MysecondcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysecondcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysecondcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomoComponent } from './tomo.component';

describe('TomoComponent', () => {
  let component: TomoComponent;
  let fixture: ComponentFixture<TomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

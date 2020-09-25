import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropboxComponent } from './dragdropbox.component';

describe('DragdropboxComponent', () => {
  let component: DragdropboxComponent;
  let fixture: ComponentFixture<DragdropboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragdropboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

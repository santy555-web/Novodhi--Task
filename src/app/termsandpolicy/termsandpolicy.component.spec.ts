import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandpolicyComponent } from './termsandpolicy.component';

describe('TermsandpolicyComponent', () => {
  let component: TermsandpolicyComponent;
  let fixture: ComponentFixture<TermsandpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsandpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycApprovalComponent } from './kyc-approval.component';

describe('KycApprovalComponent', () => {
  let component: KycApprovalComponent;
  let fixture: ComponentFixture<KycApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEmailCreEditComponent } from './report-email-cre-edit.component';

describe('ReportEmailCreEditComponent', () => {
  let component: ReportEmailCreEditComponent;
  let fixture: ComponentFixture<ReportEmailCreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportEmailCreEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEmailCreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

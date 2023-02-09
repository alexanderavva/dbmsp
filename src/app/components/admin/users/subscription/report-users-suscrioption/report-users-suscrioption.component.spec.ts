import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUsersSuscrioptionComponent } from './report-users-suscrioption.component';

describe('ReportUsersSuscrioptionComponent', () => {
  let component: ReportUsersSuscrioptionComponent;
  let fixture: ComponentFixture<ReportUsersSuscrioptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportUsersSuscrioptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUsersSuscrioptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

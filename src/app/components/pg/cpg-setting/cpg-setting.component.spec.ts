import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPgSettingComponent } from './cpg-setting.component';

describe('CPgSettingComponent', () => {
  let component: CPgSettingComponent;
  let fixture: ComponentFixture<CPgSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPgSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPgSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

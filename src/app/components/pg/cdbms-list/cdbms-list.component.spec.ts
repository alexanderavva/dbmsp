import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDbmsListComponent } from './cdbms-list.component';

describe('CDbmsListComponent', () => {
  let component: CDbmsListComponent;
  let fixture: ComponentFixture<CDbmsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDbmsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDbmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLoginComponentComponent } from './clogin-component.component';

describe('CLoginComponentComponent', () => {
  let component: CLoginComponentComponent;
  let fixture: ComponentFixture<CLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLoginComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

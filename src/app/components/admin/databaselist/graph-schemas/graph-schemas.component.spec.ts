import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSchemasComponent } from './graph-schemas.component';

describe('GraphSchemasComponent', () => {
  let component: GraphSchemasComponent;
  let fixture: ComponentFixture<GraphSchemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSchemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSchemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

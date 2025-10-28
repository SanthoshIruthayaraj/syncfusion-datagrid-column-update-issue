import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExample } from './grid-example';

describe('GridExample', () => {
  let component: GridExample;
  let fixture: ComponentFixture<GridExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePorDirector } from './reporte-por-director';

describe('ReportePorDirector', () => {
  let component: ReportePorDirector;
  let fixture: ComponentFixture<ReportePorDirector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportePorDirector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportePorDirector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

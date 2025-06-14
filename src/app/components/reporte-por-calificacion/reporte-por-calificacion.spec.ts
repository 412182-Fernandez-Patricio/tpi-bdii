import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePorCalificacion } from './reporte-por-calificacion';

describe('ReportePorCalificacion', () => {
  let component: ReportePorCalificacion;
  let fixture: ComponentFixture<ReportePorCalificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportePorCalificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportePorCalificacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

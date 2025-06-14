import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePorActor } from './reporte-por-actor';

describe('ReportePorActor', () => {
  let component: ReportePorActor;
  let fixture: ComponentFixture<ReportePorActor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportePorActor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportePorActor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportContainer } from './report-container';

describe('ReportContainer', () => {
  let component: ReportContainer;
  let fixture: ComponentFixture<ReportContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

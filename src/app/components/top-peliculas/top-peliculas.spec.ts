import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPeliculas } from './top-peliculas';

describe('TopPeliculas', () => {
  let component: TopPeliculas;
  let fixture: ComponentFixture<TopPeliculas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPeliculas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPeliculas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

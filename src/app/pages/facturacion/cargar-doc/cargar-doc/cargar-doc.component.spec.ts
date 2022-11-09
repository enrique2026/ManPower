import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarDocComponent } from './cargar-doc.component';

describe('CargarDocComponent', () => {
  let component: CargarDocComponent;
  let fixture: ComponentFixture<CargarDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

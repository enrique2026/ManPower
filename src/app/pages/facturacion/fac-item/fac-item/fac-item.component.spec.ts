import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacItemComponent } from './fac-item.component';

describe('FacItemComponent', () => {
  let component: FacItemComponent;
  let fixture: ComponentFixture<FacItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

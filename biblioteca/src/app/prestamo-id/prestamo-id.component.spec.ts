import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoIdComponent } from './prestamo-id.component';

describe('PrestamoIdComponent', () => {
  let component: PrestamoIdComponent;
  let fixture: ComponentFixture<PrestamoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

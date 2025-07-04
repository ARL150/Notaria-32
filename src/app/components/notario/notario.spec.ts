import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notario } from './notario';

describe('Notario', () => {
  let component: Notario;
  let fixture: ComponentFixture<Notario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

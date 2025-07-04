import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoRedes } from './contacto-redes';

describe('ContactoRedes', () => {
  let component: ContactoRedes;
  let fixture: ComponentFixture<ContactoRedes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoRedes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoRedes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

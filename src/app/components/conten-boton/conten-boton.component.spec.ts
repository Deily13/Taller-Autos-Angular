import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenBotonComponent } from './conten-boton.component';

describe('ContenBotonComponent', () => {
  let component: ContenBotonComponent;
  let fixture: ComponentFixture<ContenBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenBotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

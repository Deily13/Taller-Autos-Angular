import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenFormAutoComponent } from './conten-form-auto.component';

describe('ContenFormAutoComponent', () => {
  let component: ContenFormAutoComponent;
  let fixture: ComponentFixture<ContenFormAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenFormAutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenFormAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

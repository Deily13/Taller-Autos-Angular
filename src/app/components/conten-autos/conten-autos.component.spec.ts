import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenAutosComponent } from './conten-autos.component';

describe('ContenAutosComponent', () => {
  let component: ContenAutosComponent;
  let fixture: ComponentFixture<ContenAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenAutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

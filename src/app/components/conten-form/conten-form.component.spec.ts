import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenFormComponent } from './conten-form.component';

describe('ContenFormComponent', () => {
  let component: ContenFormComponent;
  let fixture: ComponentFixture<ContenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

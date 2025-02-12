import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarPasseioComponent } from './agendar-passeio.component';

describe('AgendarPasseioComponent', () => {
  let component: AgendarPasseioComponent;
  let fixture: ComponentFixture<AgendarPasseioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendarPasseioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendarPasseioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

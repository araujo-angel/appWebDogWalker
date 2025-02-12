import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroWalkerComponent } from './cadastro-walker.component';

describe('CadastroWalkerComponent', () => {
  let component: CadastroWalkerComponent;
  let fixture: ComponentFixture<CadastroWalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroWalkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

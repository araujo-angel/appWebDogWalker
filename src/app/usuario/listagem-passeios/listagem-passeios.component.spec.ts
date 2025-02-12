import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPasseiosComponent } from './listagem-passeios.component';

describe('ListagemPasseiosComponent', () => {
  let component: ListagemPasseiosComponent;
  let fixture: ComponentFixture<ListagemPasseiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemPasseiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemPasseiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterProdutoComponent } from './obter-produto.component';

describe('ObterProdutoComponent', () => {
  let component: ObterProdutoComponent;
  let fixture: ComponentFixture<ObterProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObterProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObterProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

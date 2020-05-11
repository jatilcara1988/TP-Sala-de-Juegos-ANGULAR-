import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaminasMasListadoComponent } from './buscaminas-mas-listado.component';

describe('BuscaminasMasListadoComponent', () => {
  let component: BuscaminasMasListadoComponent;
  let fixture: ComponentFixture<BuscaminasMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaminasMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaminasMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgoniusUiComponent } from './argonius-ui.component';

describe('ArgoniusUiComponent', () => {
  let component: ArgoniusUiComponent;
  let fixture: ComponentFixture<ArgoniusUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgoniusUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgoniusUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

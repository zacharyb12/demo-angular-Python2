import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExo } from './directive-exo';

describe('DirectiveExo', () => {
  let component: DirectiveExo;
  let fixture: ComponentFixture<DirectiveExo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveExo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveExo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

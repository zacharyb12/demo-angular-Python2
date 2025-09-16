import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExo1 } from './directives-exo1';

describe('DirectivesExo1', () => {
  let component: DirectivesExo1;
  let fixture: ComponentFixture<DirectivesExo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesExo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesExo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

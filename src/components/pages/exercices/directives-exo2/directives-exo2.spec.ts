import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExo2 } from './directives-exo2';

describe('DirectivesExo2', () => {
  let component: DirectivesExo2;
  let fixture: ComponentFixture<DirectivesExo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesExo2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesExo2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

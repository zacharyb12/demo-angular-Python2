import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing } from './testing';

describe('Testing', () => {
  // On Utilise une variable pour le composant a tester
  let component: Testing;

  // Fixture Permet d'acceder au composant et a son template
  let fixture: ComponentFixture<Testing>;

  // Executer avant chaque test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testing]
    })
    .compileComponents();

    // Cree le composant pour le test
    fixture = TestBed.createComponent(Testing);
    // Recuperation de l'instance testable
    component = fixture.componentInstance;
    // Detecte les changements et met a jour le template
    fixture.detectChanges();
  });

  // Verifie que le composant est cree avec succes
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de la methode addition
  it('should return number with addition', () => {
    // On appelle la methode addition avec des valeurs de test
    let valueObtenu = component.addition(2, 3);
    
    // on definit la valeur attendue
    let expectedValue = 5;

    expect(valueObtenu).toBe(expectedValue);
  })

  // Test de la division par zero
 it('should return Error : Division by zero is not allowed.', () => {
// Pour tester les erreurs on utilise toThrowError et une fonction anonyme pour pouvoir gerer l'erreur
  expect(() => component.division(5, 0)).toThrowError('Division by zero is not allowed.')
 })
});

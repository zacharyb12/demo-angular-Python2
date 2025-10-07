import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  imports: [],
  templateUrl: './testing.html',
  styleUrl: './testing.css'
})
export class Testing {


  addition(a: number, b: number): number {
    return a + b;
  }

  subtraction(a: number, b: number): number {
    return a - b;
  }

  multiplication(a: number, b: number): number {
    return a * b;
  }

  division(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
}

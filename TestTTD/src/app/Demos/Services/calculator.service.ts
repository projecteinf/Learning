import { Injectable } from '@angular/core';
import { customError } from '../Model/Classes/customError';
import { codeError, levelError } from '../Enums/codeError';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  public add(a: number, b: number): number {
    return a + b;
  }
  public divide(a: number, b: number): number {
    if (b === 0) {
      throw new customError(codeError.DIVIDE_BY_ZERO, levelError.CRITICAL, 'Division by zero', 'Math', 'Error');

      // code: string, title:string, name: string, message: string, category: string, stack?: string
    }
    return a / b;
  }
}

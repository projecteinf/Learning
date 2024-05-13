import { TestBed } from '@angular/core/testing';
import { CalculatorService } from '../../Demos/Services/calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Comprova si el servei s'ha creat (no null, no undefined)
  });

  it('should add two numbers', () => {
    const result = service.add(1, 2);
    expect(result).toEqual(3);
  });

  it('should subtract two numbers', () => {
    const result = service.subtract(3, 2);
    expect(result).toEqual(1);
  });

  it('should multiply two numbers', () => {
    const result = service.multiply(2, 3);
    expect(result).toEqual(6);
  });

  it('should divide two numbers', () => {
    const result = service.divide(6, 3);
    expect(result).toEqual(2);
  });

  it('should throw when dividing by zero', () => {
    expect(() => service.divide(6, 0)).toThrowError('Divide by zero');
  });
});

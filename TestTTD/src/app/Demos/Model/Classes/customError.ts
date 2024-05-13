import { codeError, levelError } from '../../Enums/codeError';
import { ICustomError } from '../Interfaces/customError';

export class customError implements ICustomError {
    // Propietats heredades de la interfície Error
    name: string;
    message: string;
    stack?: string; 
    // Propietats pròpies de la classe customError
    code: codeError;
    category: string;
    level: levelError;

   
    constructor(code: codeError, level: levelError, name: string, message: string, category: string, stack?: string) {
        this.name = name;
        this.level = level;
        this.message = message;
        this.code = code;
        this.category = category;
        this.stack = stack;
    }

    // Implement any additional methods or properties here
    // ...

    // Example method
    logError(): void {
        console.error(`[${this.code}] ${this.message}`);
    }
}
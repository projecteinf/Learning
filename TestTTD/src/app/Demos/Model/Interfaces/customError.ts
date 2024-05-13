import { codeError, levelError } from '../../Enums/codeError';

export interface ICustomError extends Error {
    code: codeError;
    category: string;
    message: string;
    level: levelError;
}
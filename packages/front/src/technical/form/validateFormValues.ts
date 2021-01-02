import validate from 'validate.js';

interface IFormValues { 
  [key: string]: string; 
}

interface IErrorMessagesByFormValues {
  [key: string]: string[];
}

function validateFormValues(values: IFormValues, constraints: any): IErrorMessagesByFormValues {
  let errors = validate(values, constraints, { fullMessages: false });
  return errors;
}

export default validateFormValues;
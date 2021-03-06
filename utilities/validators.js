export class Validators {
  static required(value, message) {
    if (!value || !value.toString().trim().length) {
      return { error: true, message };
    }
    return false;
  }
  static phoneNumber(value, message) {
    if (value.length !== 10) {
      return { error: true, message };
    }
    return false;
  }
}

export const validateInput = (validators, value) => {
  if (validators && validators.length) {
    for (let i = 0; i < validators.length; i++) {
      const error = validators[i].check(value, validators[i].message);
      if (error) {
        return error;
      }
    }
  }
  return false;
};

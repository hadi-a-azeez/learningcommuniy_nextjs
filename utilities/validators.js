export class Validators {
  static required(value, message) {
    if (!value || !value.toString().trim().length) {
      return { error: true, message };
    }
    return false;
  }
}

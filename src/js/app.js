export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-z][a-z0-9{0,3}_-]*[a-z]$/i.test(this.name);
  }
}

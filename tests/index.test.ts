import pswg from "../src/index";

describe('pswg', () => {
  beforeEach(() => {
    // cleanup
  });

  it('Should generate a password with 10 characters ', () => {
    expect(pswg({ length: 10 }).length).toBe(10);
  });


  it('Should generate a password with no symbols', () => {
    const password = pswg({ length: 10, excludeSymbols: true });
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    expect(hasSymbols).toBe(false);
  });

  it('Should generate a password with no uppercase letters', () => {
    const password = pswg({ length: 10, excludeUppercase: true });
    const hasUppercase = /[A-Z]/.test(password);
    expect(hasUppercase).toBe(false);
  });

  it('Should generate a password with no numbers', () => {
    const password = pswg({ length: 10, excludeNumbers: true });
    const hasNumbers = /[0-9]/.test(password);
    expect(hasNumbers).toBe(false);
  });

  it('Should generate a password with default length of 10 if no length is given', () => {
    const password = pswg();
    expect(password.length).toBe(18);
  });
});
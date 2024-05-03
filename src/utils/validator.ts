export const CARD_NUMBER_MAX_LENGTH = 4;
export const EXPIRATION_MAX_LENGTH = 2;
export const SECURITY_CODE_MAX_LENGTH = 3;
export const PASSWORD_INPUT_MAX_LENGTH = 1;

export const isCardNumber = (cardNumber: string) => {
  return Boolean(
    cardNumber.length === CARD_NUMBER_MAX_LENGTH &&
      Array.from(cardNumber).filter(
        (singleNumber) => !isNaN(Number(singleNumber))
      )
  );
};

export const isValidMonth = (month: string) => {
  if (Number(month) === 1) return false;
  return Boolean(Number(month) >= 1 && Number(month) <= 12);
};

export const isValidYear = (year: string) => {
  return Boolean(
    year.length === EXPIRATION_MAX_LENGTH &&
      Number(year) >= new Date().getFullYear() - 2000
  );
};

export const isValidSecurityCode = (securityCode: string) => {
  return Boolean(securityCode.length === SECURITY_CODE_MAX_LENGTH);
};

export const isValidPassword = (password: string) => {
  return Boolean(
    password.length === PASSWORD_INPUT_MAX_LENGTH &&
      Number(password) > 0 &&
      Number(password) <= 9
  );
};

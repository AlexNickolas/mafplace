export const login = (email, password) => {
  cy.visit("/");
  cy.get("#username").type(email);
  cy.get("#pass").type(password);
  return cy.get("#btn-login").click();
};

export const assertButtonName = (text) => {
  cy.contains(text);
};

const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
const allUniqueChars = [...`~!@#$%^&*()_+-=[]\{}|;:'"`];
const allNumbers = [..."0123456789"];

const base = [
  ...allCapsAlpha,
  ...allNumbers,
  ...allLowerAlpha,
  ...allUniqueChars,
];

export const generateString = (length, arrayOfSymbols) => {
  return [...Array(length)]
    .map((i) => arrayOfSymbols[(Math.random() * arrayOfSymbols.length) | 0])
    .join("");
};

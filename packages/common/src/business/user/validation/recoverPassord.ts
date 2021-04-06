export const recoverPasswordFormValidationRules = {
  email: {
    presence: { message: 'Veuillez entrer votre addresse email.' },
    email: { message: 'Veuillez entrer un email valide.' },
  },
};

export const loginValidationConstraints = {
  login: {
    presence: true,
    email: true,
    message: "Veuillez entrer votre addresse email.",
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "Votre mot de passe doit contenir au moins 6 caractères"
    },
    message: "Veuillez entrer votre mot de passe",
  }
} 
export const loginValidationConstraints = {
  login: {
    presence: { message: "Veuillez entrer votre addresse email." },
    email: true,
  },
  password: {
    presence: { message: "Veuillez entrer votre mot de passe" },
    length: {
      minimum: 6,
      message: "Votre mot de passe doit contenir au moins 6 caractères"
    }
  }
} 
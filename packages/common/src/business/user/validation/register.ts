
export const registerValidationConstraints = {
  email: {
    presence: true,
    email: {
      message: "Veuillez entrer une addresse email valide.",
    }
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "Le mot de passe doit contenir au moins 6 caractères."
    }
  },
  confirmPassword: {
    equality: "password"
  },
  lastName: {
    presence: true,
  },
  firstName: {
    presence: true 
  }
}

export const createAnnouncementFormValidationConstraints = {
  condition: {
    presence: { message: "Veuillez selectionner l'état du produit que vous souhaitez vendre." },
  },
  description: {
    presence: { message: 'Veuillez entrer un commentaire pour votre annonce.' },
  },
  sellingPrice: {
    presence: { message: 'Veuillez choisir un prix de vente.' },
  },

};

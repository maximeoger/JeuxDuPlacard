export interface IUserResponse {
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUserLoginAndRegisterResponse {
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUserRecoverPasswordResponse {
  recoverPasswordEmailSent: boolean;
}

export type PartialUserResponse = Omit<IUserResponse, "email" | "lastName">

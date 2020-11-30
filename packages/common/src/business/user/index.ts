export interface IUserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
};

export interface IUserLoginResponse {
  accessToken: string;
}
export default interface IUserEntity {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  emailConfirmed: boolean;
}

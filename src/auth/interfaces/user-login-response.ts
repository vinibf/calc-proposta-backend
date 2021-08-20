export interface IUserLoginResponse {
  user: {
    email: string;
    id: string;
  };
  token: string;
}

export interface IAuthService {
  signin: ( email: string, password: string ) => Promise<{ id: string, token: string }>
  signup: ( email: string, password: string, confirm: string ) => Promise<{ id: string, token: string }>
  logout: () => void
  delete: () => void
  token: () => void
}
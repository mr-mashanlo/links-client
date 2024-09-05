export interface IAuthStore {
  id: string
  auth: boolean
  setID: ( id: string ) => void
  setAuth: ( auth: boolean ) => void
}
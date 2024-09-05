export interface IProfileStore {
  firstname: string,
  lastname: string,
  email: string,
  image: string,
  setFirstname: ( firstname: string ) => void,
  setLastname: ( lastname: string ) => void,
  setEmail: ( email: string ) => void
  setImage: ( email: string ) => void
}
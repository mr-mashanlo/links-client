export interface IProfile {
  email: string,
  firstname: string,
  lastname: string,
  links: Array<{ id: string, url: string, platform: string }>
}
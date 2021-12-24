import { atom } from 'recoil'

export interface IUser {
  email: string
  accessToken: string
}

export const userDefault: IUser = {
  email: '',
  accessToken: '',
}

export const userAtom = atom({
  key: 'userState',
  default: userDefault,
})

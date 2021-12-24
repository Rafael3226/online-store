import { atom } from 'recoil'

export const darkModeAtom = atom<boolean>({
  key: 'darkModeState',
  default: false,
})

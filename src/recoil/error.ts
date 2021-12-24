import { atom } from 'recoil'

export const errorAtom = atom<string>({ key: 'errorState', default: '' })

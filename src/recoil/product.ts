import { atom } from 'recoil'

export interface IProduct {
  name: string
  description: string
  price: number
  images: string[]
}

export const productDefault: IProduct = {
  name: '',
  description: '',
  price: 0,
  images: [],
}

export const productAtom = atom<IProduct>({
  key: 'productState',
  default: productDefault,
})

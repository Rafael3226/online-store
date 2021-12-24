import { atom } from 'recoil'

export interface IProduct {
  id: string
  name: string
  description: string
  price: string
  images: string[]
}

export const productDefault: IProduct = {
  id: '',
  name: '',
  description: '',
  price: '',
  images: [],
}

export const productAtom = atom<IProduct>({
  key: 'productState',
  default: productDefault,
})

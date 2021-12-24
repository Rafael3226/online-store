import {
  getDownloadURL,
  ref,
  StorageError,
  uploadBytesResumable,
} from 'firebase/storage'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { firebaseStorage } from '../firebase'
import { errorAtom } from '../recoil/error'
import { IProduct, productAtom } from '../recoil/product'

const fileDef = new File([], '')

const useStorage = () => {
  const [file, setFile] = useState<File>(fileDef)
  const [progress, setProgress] = useState<number>(0)
  const setProduct = useSetRecoilState<IProduct>(productAtom)
  const setError = useSetRecoilState(errorAtom)
  const storageRef = ref(firebaseStorage)

  function onNext(snap: { bytesTransferred: number; totalBytes: number }) {
    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
    setProgress(percentage)
  }
  function onError(err: StorageError) {
    setError(err.toString())
  }
  function onComplete() {
    getDownloadURL(storageRef)
      .then((url) => {
        setProduct((p: IProduct) => {
          const newProduct = { ...p }
          newProduct.images.push(url)
          return newProduct
        })
      })
      .catch((err) => setError(err.message))
      .finally(() => clean())
  }
  function saveFile(file: File) {
    setFile(file)
    uploadBytesResumable(storageRef, file).then((snapshot) => {
      snapshot.task.on('state_changed', onNext, onError, onComplete)
    })
  }
  function clean() {
    setFile(fileDef)
    setProgress(0)
  }
  return { progress, file, saveFile }
}

export default useStorage

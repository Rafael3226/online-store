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

const useStorage = () => {
  const [url, setURL] = useState<string>('')
  const [progress, setProgress] = useState<number>(0)
  const setProduct = useSetRecoilState<IProduct>(productAtom)
  const setError = useSetRecoilState<string>(errorAtom)

  function saveFile(newFile: File) {
    const fbRef = ref(firebaseStorage)
    function onNext(snap: { bytesTransferred: number; totalBytes: number }) {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      setProgress(percentage)
    }
    function onError(err: StorageError) {
      setError(err.toString())
    }
    function onComplete() {
      getDownloadURL(ref(fbRef))
        .then((url) => {
          setProduct((p: IProduct) => {
            const newProduct = { ...p }
            newProduct.images.push(url)
            return newProduct
          })
        })
        .catch((err) => setError(err.message))
        .finally(() => {
          setURL('')
          setProgress(0)
        })
    }
    uploadBytesResumable(fbRef, newFile).then((snapshot) => {
      snapshot.task.on('state_changed', onNext, onError, onComplete)
    })
  }
  return { progress, url, saveFile }
}

export default useStorage

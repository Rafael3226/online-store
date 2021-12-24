import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { firebaseStorage } from '../firebase'

export async function saveFile(newFile: File) {
  const path = Date.now() + newFile.name
  const reference = ref(firebaseStorage, path)
  await uploadBytes(reference, newFile)
  return getDownloadURL(reference)
}

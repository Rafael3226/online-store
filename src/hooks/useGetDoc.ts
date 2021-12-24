import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../firebase'

async function useGetDoc(path: string, pathSegments: string) {
  const docRef = doc(firestore, path, pathSegments)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) return docSnap.data()
  return undefined
}
export default useGetDoc

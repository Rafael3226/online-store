import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import { firestore } from '../firebase'

export default class FsCollection {
  collectionName: string
  constructor(collectionName: string) {
    this.collectionName = collectionName
  }
  async getDocument(id: string) {
    const docRef = doc(firestore, this.collectionName, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) return docSnap.data()
    return null
  }

  async saveDocument(document: Object) {
    const docRef = await addDoc(
      collection(firestore, this.collectionName),
      document,
    )
    return docRef.id
  }

  async getAllDocuments() {
    const querySnapshot = await getDocs(
      collection(firestore, this.collectionName),
    )
    let documents: any[] = []
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() })
    })
    return documents
  }

  async deleteDocument(id: string) {
    return await deleteDoc(doc(firestore, this.collectionName, id))
  }

  async updateDocument(id: string, document: any) {
    return await updateDoc(doc(firestore, this.collectionName, id), document)
  }
}

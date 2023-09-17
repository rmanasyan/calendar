import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  DocumentReference,
  Firestore,
  query,
  QueryConstraint,
  UpdateData,
  updateDoc,
  WithFieldValue,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestore = inject(Firestore);

  selectCollectionData<T>(path: string, ...q: QueryConstraint[]): Observable<T[]> {
    return collectionData<T>(query<T>(collection(this.firestore, path) as CollectionReference<T>, ...q), {
      idField: 'id',
    });
  }

  selectDoc<T>(path: string): Observable<T> {
    return docData<T>(doc(this.firestore, path) as DocumentReference<T>, { idField: 'id' });
  }

  addDoc<T>(path: string, data: Partial<T>) {
    addDoc<T>(collection(this.firestore, path) as CollectionReference<T>, data as WithFieldValue<T>);
  }

  updateDoc<T>(path: string, data: Partial<T>) {
    updateDoc<T>(doc(this.firestore, path) as DocumentReference<T>, data as UpdateData<T>);
  }

  deleteDoc(path: string) {
    deleteDoc(doc(this.firestore, path));
  }
}

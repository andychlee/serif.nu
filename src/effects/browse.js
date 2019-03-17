import { db } from 'util/firebase';
import { CURRENT_TERM } from 'util/constants';

const currentTermDoc = db.collection('terms').doc(CURRENT_TERM);

<<<<<<< HEAD
export function fetchSchools() {
  return currentTermDoc
    .collection('subjects')
    .get()
    .then(
      querySnapshot => querySnapshot.docs.map(doc => doc.data()),
    );
}

export function fetchSubjects(schoolId) {
  return currentTermDoc
    .collection('subjects')
    .where('schoolId', '==', schoolId)
    .get()
    .then(querySnapshot => querySnapshot.map(doc => doc.data()));
}

export function fetchCourses(schoolId, subjectId) {
  return currentTermDoc
    .collection('courses')
    .where('schoolId', '==', schoolId)
    .where('subjectId', '==', subjectId)
=======
/* eslint-disable import/prefer-default-export */
export function fetchSubjects(termId, schoolId) {
  return currentTermDoc
    .collection('subjects')
    .where('termId', '==', termId)
    .where('schoolId', '==', schoolId)
>>>>>>> 0fca8f5c0793bda629537d075bd9aabb5fd28f5d
    .get()
    .then(
      querySnapshot => querySnapshot.docs.map(doc => doc.data()),
    );
}

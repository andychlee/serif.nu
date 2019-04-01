import { db } from 'util/firebase';
import { CURRENT_TERM } from 'util/constants';

const currentTermDoc = db.collection('terms').doc(CURRENT_TERM);

export function fetchSchools() {
  return currentTermDoc
    .collection('subjects')
    .get()
    .then(
      querySnapshot => querySnapshot.docs.map(doc => doc.data()),
    );
}

export function fetchSubjects(termId, schoolId) {
  return currentTermDoc
    .collection('subjects')
    .where('termId', '==', termId)
    .where('schoolId', '==', schoolId)
    .get()
    .then(
      querySnapshot => querySnapshot.docs.map(doc => doc.data()),
    );
}

export function fetchCourses(schoolId, subjectId) {
  return currentTermDoc
    .collection('courses')
    .where('schoolId', '==', schoolId)
    .where('subjectId', '==', subjectId)
    .get()
    .then(
      querySnapshot => querySnapshot.docs.map(doc => doc.data()),
    );
}

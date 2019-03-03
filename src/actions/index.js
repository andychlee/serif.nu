import * as actionTypes from './action-types';

export function fetchSearchIndex(termId) {
  return {
    type: actionTypes.FETCH_SEARCH_INDEX,
    termId,
  };
}

export function fetchSearchIndexSuccess(searchIndex) {
  return {
    type: actionTypes.FETCH_SEARCH_INDEX_SUCCESS,
    searchIndex,
  };
} 

export function fetchSearchIndexFailure() {
  return {
    type: actionTypes.FETCH_SEARCH_INDEX_FAILURE,
  };
}

export function fetchSubjectsRequest(){
  return {
    type: actionTypes.FETCH_SUBJECTS_REQUEST,
  };
}

export function fetchSubjectsSuccess(){
  return {
    type: actionTypes.FETCH_SUBJECTS_SUCCESS,
  };
}

export const getchSubjectsFailure = () => ({
  type: actionTypes.FETCH_SUBJECTS_FAILURE
});

export const clearSearchResults = () => ({
  type: actionTypes.CLEAR_SEARCH_RESULTS,
});

export function getSectionsRequest(termId, schoolId, subjectId, courseId) {
  return {
    type: actionTypes.GET_SECTIONS_REQUEST,
    termId,
    schoolId,
    subjectId,
    courseId,
  };
}

export const getSectionsSuccess = sections => ({
  type: actionTypes.GET_SECTIONS_SUCCESS,
  sections,
});

export const getSectionsFailure = () => ({
  type: actionTypes.GET_SECTIONS_FAILURE,
});

export const setCurrentCourseName = courseName => ({
  type: actionTypes.SET_CURRENT_COURSE_NAME,
  courseName,
});

export const viewSearch = () => ({
  type: actionTypes.VIEW_SEARCH,
});

export const addSection = section => ({
  type: actionTypes.ADD_SECTION,
  section,
});

export const getSchoolsRequest = () => ({
  type: actionTypes.GET_SCHOOLS_REQUEST,
});

export const getSchoolsSuccess = schools => ({
  type: actionTypes.GET_SCHOOLS_SUCCESS,
  schools,
});

export const getSchoolsFailure = () => ({
  type: actionTypes.GET_SCHOOLS_FAILURE,
});

//////
export function FETCH_SUBJECTS_FAILURE(){
  return {
    type: actionTypes.FETCH_SUBJECTS_FAILURE,
  };
}
export const fetchSubjectsSuccess = searchInput => ({
  type: actionTypes.GET_SEARCH_RESULTS_REQUEST,
  searchInput,
});

export const getSearchResultsSuccess = searchResults => ({
  type: actionTypes.GET_SEARCH_RESULTS_SUCCESS,
  searchResults,
});
////////

export const updateSearchInput = searchInput => ({
  type: actionTypes.UPDATE_SEARCH_INPUT,
  searchInput,
});


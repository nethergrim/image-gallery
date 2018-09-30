// @flow
import { PICTURES_FETCH_SUCCESS, PICTURES_FETCH_REQUESTED, FETCH_FAILED } from './actions';

const initialState = {
  pictures: [],
  isLoading: true,
  page: 1,
  errorMessage: '',
}

export default function (state: any = initialState, action: Object) {
  const payload = action.payload
  switch (action.type) {
    case PICTURES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        pictures: action.payload.pictures,
        isLoading: false,
        page: action.payload.page,
        errorMessage: ''
      })
    case FETCH_FAILED:
      return Object.assign({}, state, {
        pictures: [],
        isLoading: false,
        page: 1,
        errorMessage: action.payload.errorMessage
      })
    case PICTURES_FETCH_REQUESTED:
      return Object.assign({}, state, {
        isLoading: true,
      })
    default:
      return state;
  }
}

import { PICTURE_DETAILS_FETCH_REQUESTED, PICTURE_DETAILS_FETCH_SUCCESS } from './actions';

const initialState = {
  isLoading: false,
}

export default function (state: any = initialState, action: Object) {
  switch (action.type) {
    case PICTURE_DETAILS_FETCH_REQUESTED:
      return Object.assign({}, state, {
        isLoading: true,
      })

    case PICTURE_DETAILS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
      })
    default:
      return state;
  }
}

import { getPictures } from '../../services/500pxAPI'
import type { ActionWithPayload, ActionWithoutPayload } from '../../types/actions'

export const PICTURES_FETCH_REQUESTED = 'PICTURES_FETCH_REQUESTED'
export const PICTURES_FETCH_SUCCESS = 'PICTURES_FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'

export function listIsLoading (): ActionWithoutPayload {
  return {
    type: PICTURES_FETCH_REQUESTED,
  }
}

export function fetchListSuccess (pictures: Array<Object>, page: number): ActionWithPayload {
  return {
    // TODO: implement me
  }
}

export function fetchListFailed (errorMessage: string): ActionWithPayload {
  return {
    // TODO: implement me
  }
}

export function fetchPictures (page: number = 1) {
  return async dispatch => {
    // TODO: implement me
  }
}

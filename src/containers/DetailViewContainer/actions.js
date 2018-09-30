// @flow

import { getPictureDetails } from '../../services/UnsplashApi'
import { FETCH_FAILED } from '../HomeContainer/actions'
import type { ActionWithPayload, ActionWithoutPayload } from '../../types/actions'

export const PICTURE_DETAILS_FETCH_REQUESTED = 'PICTURE_DETAILS_FETCH_REQUESTED'
export const PICTURE_DETAILS_FETCH_SUCCESS = 'PICTURE_DETAILS_FETCH_SUCCESS'
export const PICTURE_DETAILS_FETCH_FAIL = 'PICTURE_DETAILS_FETCH_FAIL'

export function pictureIsLoading(): ActionWithoutPayload {
  return {
    type: PICTURE_DETAILS_FETCH_REQUESTED,
  }
}

export function fetchPictureSuccess(): ActionWithoutPayload {
  return {
    type: PICTURE_DETAILS_FETCH_SUCCESS,
  }
}

export function fetchPictureFailed(errorMessage: string): ActionWithPayload {
  return {
    type: PICTURE_DETAILS_FETCH_FAIL,
    payload: {
      errorMessage: errorMessage
    }
  }
}

export function fetchPictureDetails(imageId: string) {
  return async dispatch => {
    dispatch(pictureIsLoading());
  }
}

export function onPictureLoaded() {
  return async dispatch => {
    dispatch(fetchPictureSuccess());
  }
}

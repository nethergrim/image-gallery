// @flow

export const selectHiResImage = (state: Object, imageId: string) => state.detailViewReducer.hiResPictures
  .find(hiResPic => hiResPic.id === imageId)

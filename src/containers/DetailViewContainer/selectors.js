// @flow

export const selectHiResImage = (state: Object, imageId: number) => state.detailViewReducer.hiResPictures
  .find(hiResPic => hiResPic.id === imageId)

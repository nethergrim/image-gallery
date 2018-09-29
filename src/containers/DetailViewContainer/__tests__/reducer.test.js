import reducer from '../reducer'
import { PICTURE_DETAILS_FETCH_REQUESTED } from '../actions'
import { FETCH_FAILED } from '../../HomeContainer/actions'

describe('list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      hiResPictures: [],
      isLoading: false,
    })
  })
})

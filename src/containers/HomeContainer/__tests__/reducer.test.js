import reducer from '../reducer'

describe('list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      pictures: [],
      isLoading: true,
      page: 1,
      errorMessage: '',
    })
  })
})

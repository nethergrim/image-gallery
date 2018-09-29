import { combineReducers } from 'redux'

import homeReducer from '../containers/HomeContainer/reducer'
import detailViewReducer from '../containers/DetailViewContainer/reducer'

export default combineReducers({
  homeReducer,
  detailViewReducer,
})

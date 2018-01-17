import { combineReducers } from 'redux'
import * as todoList from './todoList'
import * as musicList from './music'

//Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。
//你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
const rootReducer = combineReducers({
  ...todoList,
  ...musicList,
})

export default rootReducer
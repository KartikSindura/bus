import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import toggleReducer from './slices/toggleSlice'
import busStateReducer from './slices/busStateSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
    busState: busStateReducer
  },
})
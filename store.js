import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import toggleReducer from './slices/toggleSlice'
import fareReducer from './slices/fareSlice'
import colorReducer from './slices/colorSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
    fare: fareReducer,
    color: colorReducer,
  },
})
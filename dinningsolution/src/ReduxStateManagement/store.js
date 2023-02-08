import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./MenuSlice"
export const store = configureStore({
  reducer: {
Counter:CounterReducer
  },
})

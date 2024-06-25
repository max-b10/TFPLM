import { configureStore } from '@reduxjs/toolkit'
import idReducer from './id/idSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      id: idReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
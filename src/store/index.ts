import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, shallowEqual, TypedUseSelectorHook } from 'react-redux'

import counterReducer from './modules/counter'
import recommendStore from '@/views/discover/c-views/recommend/store'
import playerStore from '@/views/player/store'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendStore,
    player: playerStore
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const AppShallowEqual = shallowEqual

export default store

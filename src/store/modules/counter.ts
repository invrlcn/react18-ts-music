import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello react'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    },
    changeCountAction(state) {
      state.count += 1
    }
  }
})

export const { changeMessageAction, changeCountAction } = counterSlice.actions

export default counterSlice.reducer

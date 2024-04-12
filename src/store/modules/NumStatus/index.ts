import { createSlice } from '@reduxjs/toolkit'

const initialStatedata = {//初始化
  num:20
}

const playerSlice = createSlice({
  name: 'NumStatus',
  initialState: initialStatedata,
  reducers: {
    changenumAction (state, { payload }) {
      state.num += payload
    },
  }
})
export const { changenumAction} = playerSlice.actions;
export default playerSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  light: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {

      state.light = !state.light
    },
  },
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer
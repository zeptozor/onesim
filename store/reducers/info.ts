import { createReducer, createAction } from '@reduxjs/toolkit'

interface InfoState {
    value: 'features' | 'description' | 'operators'
}

const initialState: InfoState = {
  value: 'features'
}

const change = createAction<'features' | 'description' | 'operators'>('info/change')

export const infoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(change, (state, action) => {
      state.value = action.payload
    })
})
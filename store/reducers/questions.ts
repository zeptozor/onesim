import { createReducer, createAction } from '@reduxjs/toolkit'

interface QuestionsState {
    value: string
}

const initialState: QuestionsState = {
  value: 'when'
}

const change = createAction<string>('questions/change')

export const questionsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(change, (state, action) => {
      state.value = action.payload
    })
})
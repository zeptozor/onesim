import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { infoReducer } from './reducers/info'
import { questionsReducer } from './reducers/questions'

const combinedReducer = combineReducers({
    info: infoReducer,
    question: questionsReducer
})

const reducer: typeof combinedReducer = (state, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export const makeStore = () => configureStore({ reducer })

type AppStore = ReturnType<typeof makeStore>

export type AppDispatch = AppStore['dispatch']
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>
  
export const wrapper = createWrapper(makeStore)
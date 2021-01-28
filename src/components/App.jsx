/*
  Component (App)
  - メインコンポーネント
*/

// React
import React, { useReducer, useEffect } from 'react'
// SCSS
import '../scss/App.scss'
// Component
import { EventForm } from './EventForm'
import { EventList } from './EventList'
import { OperationLogList } from './OperationLogList'
// Reducer
import { reducer } from '../reducers'
// Context
import { AppContext } from '../contexts/AppContext'

// localStorage Key
const APP_KEY = 'MY_EVENT_MANAGEMENT_APP'

// コンポーネント定義
export const App = () => {
  // Reducerの初期state、localStorageにKeyが存在する場合そのデータを初期stateとする
  const StringFromLocaStorage = localStorage.getItem(APP_KEY)
  const initialState = StringFromLocaStorage
    ? JSON.parse(StringFromLocaStorage)
    : {
        events: [],
        operationLogs: [],
      }

  // Reducerから遷移後のstateとdispatchを取得
  const [state, dispatch] = useReducer(reducer, initialState)

  // localStorageに保存
  useEffect(() => {
    const string = JSON.stringify(state)
    localStorage.setItem(APP_KEY, string)
  }, [state])

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="section-wrapper">
          <EventForm />
          <EventList />
          <OperationLogList />
        </div>
      </AppContext.Provider>
    </>
  )
}

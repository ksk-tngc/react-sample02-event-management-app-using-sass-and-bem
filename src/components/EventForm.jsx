/*
  Component (EventForm)
  - イベント作成フォーム
*/

// React
import React, { useContext, useState } from 'react'
// Context
import { AppContext } from '../contexts/AppContext'
// Action
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  CREATE_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions'
// Utils
import { getLocalDateString } from '../utils'

// コンポーネント定義
export const EventForm = () => {
  // inputの値
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // Contextから値を取得
  const { state, dispatch } = useContext(AppContext)

  // チェック用変数 (真偽値)
  const canCreateEvent = title !== '' && body !== ''
  const canDeleteAllEvents = state.events.length !== 0
  const canDeleteAllOperationLogs = state.operationLogs.length !== 0

  // EventHandler (イベントを作成するボタン)
  const onClickCreateEventButton = (e) => {
    e.preventDefault()
    // 追加するeventのidを導出
    const length = state.events.length
    const id = length === 0 ? 1 : state.events[length - 1].id + 1
    // eventを作成
    dispatch({
      type: CREATE_EVENT,
      id,
      title,
      body,
    })
    // 操作ログに追加
    dispatch({
      type: CREATE_OPERATION_LOG,
      description: `イベント(ID:${id})を作成しました。`,
      operatedAt: getLocalDateString(),
    })
    // input初期化
    setTitle('')
    setBody('')
  }

  // EventHandler (全てのイベントを削除するボタン)
  const onClickDeleteAllEventsButton = (e) => {
    e.preventDefault()
    // 確認
    const confMsg = '全てのイベントを削除します。よろしいですか？'
    if (!window.confirm(confMsg)) {
      return
    }
    // 全てのeventを削除
    dispatch({
      type: DELETE_ALL_EVENTS,
    })
    // 操作ログに追加
    dispatch({
      type: CREATE_OPERATION_LOG,
      description: '全てのイベントを削除しました。',
      operatedAt: getLocalDateString(),
    })
  }

  // EventHandler (全ての操作ログを削除するボタン)
  const onClickDeleteAllOperationLogsButton = (e) => {
    e.preventDefault()
    // 確認
    const confMsg = '全ての操作ログを削除します。よろしいですか？'
    if (!window.confirm(confMsg)) {
      return
    }
    // 全ての操作ログを削除する
    dispatch({
      type: DELETE_ALL_OPERATION_LOGS,
    })
  }

  return (
    <>
      <section className="section section-wrapper__section">
        <h4 className="section__title">イベント作成フォーム</h4>
        <div className="event-form">
          <div className="event-form__form-item">
            <label className="event-form__label" htmlFor="input-title">
              タイトル
            </label>
            <input
              className="event-form__input"
              id="input-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="event-form__form-item">
            <label className="event-form__label" htmlFor="input-body">
              内容
            </label>
            <textarea
              className="event-form__input event-form__input--textarea"
              id="input-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div className="event-form__btn-group">
            <button
              className={
                'event-form__btn ' +
                (canCreateEvent ? '' : 'event-form__btn--disabled')
              }
              onClick={onClickCreateEventButton}
              disabled={!canCreateEvent}
            >
              イベントを作成する
            </button>
            <button
              className={
                'event-form__btn event-form__btn--danger ' +
                (canDeleteAllEvents ? '' : 'event-form__btn--disabled')
              }
              onClick={onClickDeleteAllEventsButton}
              disabled={!canDeleteAllEvents}
            >
              全てのイベントを削除する
            </button>
            <button
              className={
                'event-form__btn event-form__btn--danger ' +
                (canDeleteAllOperationLogs ? '' : 'event-form__btn--disabled')
              }
              onClick={onClickDeleteAllOperationLogsButton}
              disabled={!canDeleteAllOperationLogs}
            >
              全ての操作ログを削除する
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

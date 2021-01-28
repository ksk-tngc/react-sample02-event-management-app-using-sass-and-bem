/*
  Component (EventListRow)
  - イベント一覧の1行
*/

// React
import React, { useContext } from 'react'
// Context
import { AppContext } from '../contexts/AppContext'
// Action
import { DELETE_EVENT, CREATE_OPERATION_LOG } from '../actions'
// Util
import { getLocalDateString } from '../utils'

// コンポーネント定義
export const EventListRow = (props) => {
  const { event } = props

  // Contextから値を取得
  const { dispatch } = useContext(AppContext)

  // EventHandler (削除ボタン)
  const onClickDeleteEventButton = (e) => {
    e.preventDefault()
    // 確認
    const confMsg = `イベント(ID:${event.id})を削除します。よろしいですか？`
    if (!window.confirm(confMsg)) {
      return
    }
    // eventを削除
    dispatch({
      type: DELETE_EVENT,
      id: event.id,
    })
    // 操作ログに追加
    dispatch({
      type: CREATE_OPERATION_LOG,
      description: `イベント(ID:${event.id})を削除しました。`,
      operatedAt: getLocalDateString(),
    })
  }

  return (
    <>
      <tr>
        <td className="event-table__td">{event.id}</td>
        <td className="event-table__td">{event.title}</td>
        <td className="event-table__td">{event.body}</td>
        <td className="event-table__td event-table__td--del-btn">
          <button
            className="event-table__btn event-table__btn--danger"
            onClick={onClickDeleteEventButton}
          >
            削除
          </button>
        </td>
      </tr>
    </>
  )
}

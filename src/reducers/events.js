/*
  Reducer (events)
*/

// Action
import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS } from '../actions'

// Reducer定義
export const events = (state = [], action) => {
  switch (action.type) {
    // ----------------------------------------
    // イベントを作成する
    // ----------------------------------------
    case CREATE_EVENT: {
      const { id, title, body } = action
      // 追加するevent
      const event = {
        id,
        title,
        body,
      }
      // 既存stateの最後の要素に追加
      return [...state, event]
    }
    // ----------------------------------------
    // イベントを削除する
    // ----------------------------------------
    case DELETE_EVENT: {
      const { id } = action
      // 既存stateから指定idの要素を削除
      return state.filter((event) => event.id !== id)
    }
    // ----------------------------------------
    // 全てのイベントを削除する
    // ----------------------------------------
    case DELETE_ALL_EVENTS: {
      // stateを空にする
      return []
    }
    // ----------------------------------------
    // 上記以外
    // ----------------------------------------
    default: {
      return state
    }
  }
}

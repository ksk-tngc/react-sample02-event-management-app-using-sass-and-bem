/*
  Reducer (operationLogs)
*/

// Action
import { CREATE_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions'

// Reducer定義
export const operationLogs = (state = [], action) => {
  switch (action.type) {
    // ----------------------------------------
    // 操作ログを追加
    // ----------------------------------------
    case CREATE_OPERATION_LOG: {
      const { description, operatedAt } = action
      // 追加するobject
      const operationLog = {
        description,
        operatedAt,
      }
      // 操作ログの先頭に追加
      return [operationLog, ...state]
    }
    // ----------------------------------------
    // 全ての操作ログを削除
    // ----------------------------------------
    case DELETE_ALL_OPERATION_LOGS: {
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

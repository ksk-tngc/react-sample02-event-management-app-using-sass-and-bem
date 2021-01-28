/*
  Component (OperationLogList)
  - 操作ログ一覧
*/

// React
import React, { useContext } from 'react'
// Component
import { OperationLogListRow } from './OperationLogListRow'
// Context
import { AppContext } from '../contexts/AppContext'

// コンポーネント定義
export const OperationLogList = () => {
  // Contextから値取得
  const { state } = useContext(AppContext)

  return (
    <>
      <section className="section">
        <h4 className="section__title">操作ログ一覧</h4>
        <table className="operation-log-table">
          <thead>
            <tr>
              <th className="operation-log-table__th operation-log-table__th--description">
                内容
              </th>
              <th className="operation-log-table__th operation-log-table__th--operated-at">
                日時
              </th>
            </tr>
          </thead>
          <tbody>
            {state.operationLogs.map((operationLog, index) => (
              <OperationLogListRow key={index} operationLog={operationLog} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

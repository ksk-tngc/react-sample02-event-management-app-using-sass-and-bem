/*
  Component (OperationLogListRow)
  - 操作ログの1行
*/

// React
import React from 'react'

// コンポーネント定義
export const OperationLogListRow = (props) => {
  const { operationLog } = props

  return (
    <>
      <tr>
        <td className="operation-log-table__td">{operationLog.description}</td>
        <td className="operation-log-table__td">{operationLog.operatedAt}</td>
      </tr>
    </>
  )
}

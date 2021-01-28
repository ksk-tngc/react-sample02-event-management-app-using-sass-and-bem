/*
  Component (EventList)
  - イベント一覧
*/

// React
import React, { useContext } from 'react'
// Context
import { AppContext } from '../contexts/AppContext'
// Component
import { EventListRow } from './EventListRow'

// コンポーネント定義
export const EventList = () => {
  // Contextから値を取得
  const { state } = useContext(AppContext)

  return (
    <>
      <section className="section section-wrapper__section">
        <h4 className="section__title">イベント一覧</h4>
        <table className="event-table">
          <thead>
            <tr>
              <th className="event-table__th event-table__th--id">ID</th>
              <th className="event-table__th event-table__th--title">
                タイトル
              </th>
              <th className="event-table__th event-table__th--body">内容</th>
              <th className="event-table__th event-table__th--del-btn"></th>
            </tr>
          </thead>
          <tbody>
            {state.events.map((event, index) => (
              <EventListRow key={index} event={event} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

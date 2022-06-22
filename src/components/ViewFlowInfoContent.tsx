import React, { useEffect, useState, useRef } from 'react'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/modules/reducer'

import FlowContent from './FlowContent'

type Flow = {
  id: number
  label: string
}

function ViewFlowInfoContent() {
  const userLevel = useSelector((state: { base: RootStore }) => {
    return state.base.level.userLevel
  })

  const [flowList, flowListSet] = useState<Flow[]>([])

  useEffect(() => {
    const list: Flow[] = []
    for (let index = 1; index < userLevel + 1; index++) {
      list.push({ id: index, label: `記憶情報のレベライズ${index}` })
    }
    flowListSet(list)
  }, [userLevel])

  return (
    <div className="content content--view-flow-info p-4">
      {flowList.map((item: Flow) => {
        return (
          <div key={item.id}>
            <Typography variant="h6" gutterBottom component="div">
              {item.label}
            </Typography>
            <FlowContent setId={item.id} />
          </div>
        )
      })}
    </div>
  )
}

export default ViewFlowInfoContent

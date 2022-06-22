import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/modules/reducer'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Slider from '@mui/material/Slider'
import { PropaneSharp } from '@mui/icons-material'
import { pageText01 } from './text/pageText01'
import { pageText02 } from './text/pageText02'
import { pageText03 } from './text/pageText03'

const marks = [
  {
    value: 0,
    label: '0lv',
  },
  {
    value: 20,
    label: '20lv',
  },
  {
    value: 37,
    label: '37lv',
  },
  {
    value: 100,
    label: '100lv',
  },
]

interface Props {
  viewId: number
}

function LevelInfoContent(props: Props) {
  const levelinfo = useSelector((state: { base: RootStore }) => {
    return state.base.level
  })
  const [value01, value01Set] = useState<number>(0)
  const [value02, value02Set] = useState<number>(0)
  const [value03, value03Set] = useState<number>(0)

  const setInfo = () => {
    const number01 = Math.ceil(value01 / 10)
    const number02 = Math.ceil(value02 / 10)
    const number03 = Math.ceil(value03 / 10)
    switch (props.viewId) {
      case 1:
        return pageText01[number01].text
      case 2:
        return pageText02[number02].text
      case 3:
        return pageText03[number03].text
      default:
        return `data1`
    }
  }

  return (
    <div className="content p-3">
      <Card className="mb-3">
        <CardContent>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ maxWidth: '50%', width: '100%', mb: 3, p: 2 }}>
              <div className="p-3">
                <p className="caption">練習の理論化</p>
                <Slider
                  aria-label="Always visible"
                  value={value01}
                  step={10}
                  onChange={(e: Event, value: number | number[]) => {
                    if (typeof value === 'number') value01Set(value)
                  }}
                  marks={marks}
                  valueLabelDisplay="on"
                />
              </div>
              {props.viewId > 1 && (
                <div className="p-3">
                  <p className="caption">ツール化した情報</p>
                  <Slider
                    aria-label="Always visible"
                    value={value02}
                    onChange={(e: Event, value: number | number[]) => {
                      if (typeof value === 'number') value02Set(value)
                    }}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                  />
                </div>
              )}
              {props.viewId > 2 && (
                <div className="p-3">
                  <p className="caption">状況分析</p>
                  <Slider
                    aria-label="Always visible"
                    value={value03}
                    onChange={(e: Event, value: number | number[]) => {
                      if (typeof value === 'number') value03Set(value)
                    }}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                  />
                </div>
              )}
            </Box>
            <Box sx={{ maxWidth: '50%', width: '100%', mb: 3 }}>
              {setInfo()}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}

export default LevelInfoContent

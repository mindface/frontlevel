import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/modules/reducer'
import Card from '@mui/material/Card'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

function NumberContent() {
  const levelinfo = useSelector((state: { base: RootStore }) => {
    return state.base.level.levelsInfo
  })

  const userLevel = useSelector((state: { base: RootStore }) => {
    return state.base.level.userLevel
  })

  const [switcher, switcherSet] = useState(true)

  const goalRate = () => {
    return levelinfo.target !== 0
      ? Math.ceil(
          (Number(levelinfo.target) / Number(levelinfo.verification)) * 1000
        ) / 10
      : 0
  }

  const infoProcess = () => {
    return levelinfo.info !== 0
      ? Math.ceil(levelinfo.info * levelinfo.verification * 10) / 10
      : 0
  }

  const userDiscRate = () => {
    const rate =
      Math.ceil(
        ((userLevel * levelinfo.memory) / levelinfo.verification) * 10
      ) / 1000
    return rate
  }

  const metaRate = () => {
    const rate = Math.ceil(levelinfo.verification / userLevel)
    return rate
  }

  return (
    <div
      className={
        switcher
          ? 'content content--number boxShadow p-2'
          : 'content content--number boxShadow p-2 off'
      }
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              value={switcher}
              onClick={() => {
                switcherSet(!switcher)
              }}
            />
          }
          label="表示スウィッチ"
        />
      </FormGroup>
      <ul className="list _flex_ p-3">
        <li className="item mb-2">
          <Card sx={{ maxWidth: 345 }}>
            <div className="p-3">
              <p className="number-caption">目標達成数</p>
              <p className="number">{goalRate()}% (目標達成数/検証総数)</p>
            </div>
          </Card>
        </li>
        <li className="item mb-2">
          <Card sx={{ maxWidth: 345 }}>
            <div className="p-3">
              <p className="number-caption">保持情報量</p>
              <p className="number">{infoProcess()}(検証総数×言語情報量)</p>
            </div>
          </Card>
        </li>
        <li className="item mb-2">
          <Card sx={{ maxWidth: 345 }}>
            <div className="p-3">
              <p className="number-caption">ユーザーの説明情報量</p>
              <p className="number">{userDiscRate()}%</p>
            </div>
          </Card>
        </li>
        <li className="item mb-2">
          <Card sx={{ maxWidth: 345 }}>
            <div className="p-3">
              <p className="number-caption">メタ情報としてフェーズ化</p>
              <p className="number">
                {metaRate()}(言語情報量量/ユーザーレベル)
              </p>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  )
}

export default NumberContent

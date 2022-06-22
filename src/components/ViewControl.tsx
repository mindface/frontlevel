import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from '../store/modules/reducer'
// import {
//   RecoilRoot,
// } from 'recoil';
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import Switch from '@mui/material/Switch'

function ViewControl() {
  const dispatch = useDispatch()

  const userLevel = useSelector((state: { base: RootStore }) => {
    const number = state.base.level.userLevel
    return number ? number : 0
  })

  const [selectedValue, setSelectedValue] = useState(0)
  const [categoryValue, setCategoryValue] = useState('memory')
  const [memory, memorySet] = useState<number | number[]>(0)
  const [target, targetSet] = useState<number | number[]>(0)
  const [verification, verificationSet] = useState<number | number[]>(0)
  const [info, infoSet] = useState<number | number[]>(0)
  const [switcher, switcherSet] = useState(true)

  const setAction = () => {
    const levelsInfo = {
      memory: memory,
      target: target,
      verification: verification,
      info: info,
    }
    dispatch({ type: 'levelinfo/setLevelInfo', levelsInfo })
    const userLevel = selectedValue
    dispatch({ type: 'levelinfo/setUserLevel', userLevel })
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: number
  ) => {
    switch (type) {
      case 2:
        setCategoryValue(event.target.value)
        break
      default:
        setSelectedValue(Number(event.target.value))
        break
    }
  }

  useEffect(() => {
    setSelectedValue(userLevel)
  }, [userLevel])

  return (
    <div
      className={
        switcher ? 'control boxShadow p-2' : 'control boxShadow p-2 off'
      }
    >
      <FormGroup className="switcher">
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
          label={switcher ? 'On' : 'Off'}
        />
      </FormGroup>
      <h5 className="control-title pb-2">調整パネル</h5>
      <div className="control-field">
        <div className="caption pb-1">
          <span className="aid">レスポンス記憶パタン数 / </span>
          {memory}
        </div>
        <div className="value pb-2">
          <Slider
            size="small"
            value={memory}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={(event: Event, newValue: number | number[]) => {
              memorySet(newValue)
            }}
          />
        </div>
      </div>
      <div className="control-field">
        <div className="caption pb-1">
          <span className="aid">目標達成数 / </span>
          {target}
        </div>
        <div className="value pb-2">
          <Slider
            size="small"
            value={target}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={(event: Event, newValue: number | number[]) => {
              targetSet(newValue)
            }}
          />
        </div>
      </div>
      <div className="control-field">
        <div className="caption pb-1">
          <span className="aid">検証総数 / </span>
          {verification}
        </div>
        <div className="value pb-2">
          <Slider
            size="small"
            value={verification}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={(event: Event, newValue: number | number[]) => {
              verificationSet(newValue)
            }}
          />
        </div>
      </div>
      <div className="control-field">
        <div className="caption pb-1">
          <span className="aid">言語情報量 / </span>
          {info}
        </div>
        <div className="value pb-2">
          <Slider
            size="small"
            value={info}
            aria-label="Small"
            valueLabelDisplay="auto"
            onChange={(event: Event, newValue: number | number[]) => {
              infoSet(newValue)
            }}
          />
        </div>
      </div>
      <div className="control-field pb-2">
        <FormControl>
          <FormLabel id="controlled-user-group">ユーザーのレベル</FormLabel>
          <RadioGroup
            aria-labelledby="controlled-user-group"
            name="controlled-user-group"
            value={selectedValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, 1)
            }
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="ITレベル01"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="ITレベル02"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="ITレベル03"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="ITレベル04"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="control-field pb-2">
        <FormControl>
          <FormLabel id="controlled-category-group">ユーザーのレベル</FormLabel>
          <RadioGroup
            aria-labelledby="controlled-category-group"
            name="controlled-category-group"
            value={categoryValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e, 2)
            }
          >
            <FormControlLabel
              value="memory"
              control={<Radio />}
              label="座学(記憶ベース)"
            />
            <FormControlLabel
              value="motion"
              control={<Radio />}
              label="運動(感覚器官ベース)"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="control-field">
        <Button variant="contained" onClick={() => setAction()}>
          Contained
        </Button>
      </div>
    </div>
  )
}

export default ViewControl

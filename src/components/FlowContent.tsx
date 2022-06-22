import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import InputBase from '@mui/material/InputBase'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { data } from './text/levelText1'
import { dataList } from './text/level1'
import { searchText } from './text/searchText'

import { useSelector } from 'react-redux'
import { RootStore } from '../store/modules/reducer'
import { textData } from '../models/textData'

type SetProps = {
  setId: number
}

type Step = {
  id: number
  label: string
}

type SearchText = {
  id: number
  label: string
  text: string
}

const step = [
  { id: 21, label: 'flow level 01' },
  { id: 22, label: 'flow level 02' },
  { id: 23, label: 'flow level 03' },
]

function FlowContent(props: SetProps) {
  const levelinfo = useSelector((state: { base: RootStore }) => {
    return state.base.level.levelsInfo
  })

  const listData = useRef<textData[]>(dataList)
  const [searchLinkText, searchLinkTextSet] = useState('')
  const [searchLinkList, searchLinkListSet] = useState<SearchText[]>([])
  const [steps, stepsSet] = useState(step)
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState<{
    [k: number]: boolean
  }>({})
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper')

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const setJsonData = () => {
    const list: SearchText[] = []
    searchText.map((item: SearchText) => {
      list.push({ ...item, text: `${searchLinkText}${item.text}` })
    })
    searchLinkListSet(list)
  }

  const descriptionElementRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  const setPath = (id: number) => {
    switch (props.setId) {
      case 1:
        return `pattern_article_${id}`
      case 2:
        return `pattern_image_${id}`
      case 3:
        return `pattern_movie_${id}`
    }
  }

  useEffect(() => {
    stepsSet([])
    let list: Step[] = []
    let number = Math.ceil(levelinfo.memory / 10)
    number = number + Math.ceil(levelinfo.target / 10)
    for (let index = 0; index < number; index++) {
      list.push({ id: index + 1, label: `flow level 0${index + 1}` })
    }
    // list = step.concat(list);
    stepsSet(list)
  }, [levelinfo])

  return (
    <div
      className="view-flow-info p-4"
      style={{ minWidth: steps.length * 180 + 'px' }}
    >
      <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((item: Step, index: number) => (
            <Step key={item.id} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {item.label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div className="patterm-info">
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              情報レベルStep {activeStep + 1}
            </Typography>
            <Button onClick={handleClickOpen('paper')}>
              改善情報リスト Level {activeStep + 1}
            </Button>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              scroll={scroll}
              sx={{ minWidth: '420px' }}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
              className="patterm-info-dialog"
            >
              <DialogTitle id="scroll-dialog-title">
                変更項目{activeStep + 1}
              </DialogTitle>
              <DialogContent dividers={scroll === 'paper'}>
                <Card
                  component="div"
                  sx={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    position: 'relative',
                    m: 4,
                    p: '2px 4px',
                    border: 'none',
                    overflow: 'visible',
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1, maxWidth: 400 }}
                    placeholder="Search Google search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    value={searchLinkText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      searchLinkTextSet(e.target.value)
                    }}
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={setJsonData}
                  >
                    <SearchIcon />
                  </IconButton>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <div className="view-linkput">
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <SearchIcon />
                          </Avatar>
                        </ListItemAvatar>
                        検索サンプルテキスト
                      </ListItem>
                      <Divider />
                      {searchLinkList.map((item: SearchText) => {
                        return (
                          <ListItem disablePadding key={item.id} >
                            <ListItemButton
                              onClick={() => {
                                window.open(
                                  `https://www.google.com/search?q=${item.text}`,
                                  '_blank'
                                )
                              }}
                            >
                              <ListItemText primary={item.text} />
                            </ListItemButton>
                          </ListItem>
                        )
                      })}
                    </List>
                  </div>
                </Card>
                <div className="_flex_">
                  {data[activeStep].list.map((item: string, index: number) => {
                    return (
                      <div key={index} className="flow-box p-1">
                        <p className="text pb-1">{item}</p>
                        {
                          <div className="img-box _flex_">
                            <Image 
                              src={`/pattern/${setPath(index + 1)}.png`}
                              alt="説明画像"
                              layout="fill"
                              objectFit="contain"
                              className="img"
                            />
                          </div>
                        }
                      </div>
                    )
                  })}
                </div>
                {listData.current.map((item: textData) => {
                  return (
                    <Card className="mb-3" key={item.id}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.text}
                        </Typography>
                        <Typography
                          fontSize={14}
                          variant="body1"
                          color="text.secondary"
                        >
                          {item.body}
                        </Typography>
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>
                  )
                })}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose}>Subscribe</Button>
              </DialogActions>
            </Dialog>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
            </Box>
          </React.Fragment>
        </div>
      </Box>
    </div>
  )
}

export default FlowContent

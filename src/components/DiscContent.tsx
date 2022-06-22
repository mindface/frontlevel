import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootStore } from '../store/modules/reducer'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

function DiscContent() {
  const levelinfo = useSelector((state: { base: RootStore }) => {
    return state.base.level
  })
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className="content p-3">
      <Card className="mb-3">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            このサービスの認識について。
          </Typography>
          <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="story 01" {...a11yProps(0)} />
              <Tab label="story 02" {...a11yProps(1)} />
              <Tab label="story 03" {...a11yProps(2)} />
              <Tab label="story 04" {...a11yProps(3)} />
              <Tab label="story 05" {...a11yProps(4)} />
              <Tab label="story 06" {...a11yProps(5)} />
              <Tab label="story 07" {...a11yProps(6)} />
            </Tabs>
            <div className="tab-panel-box" style={{ flex: 1 }}>
              <TabPanel value={value} index={0}>
                <div className="disc-panel _flex_">
                  <div className="disc-image p-3">
                    <img src="disc/disc_01.svg" alt="" className="img" />
                  </div>
                  <div className="disc-info">
                    <Typography variant="h6" gutterBottom component="div">
                      エンドユーザーのアクションから情報をデータ化
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      情報をデータにすることは、現象を数値化することです。
                      数値そのものは、厳密な定義ですが、前提の情報体は厳密な定義にすることが難しいものです。
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="disc-panel _flex_">
                  <div className="disc-image p-3">
                    <img src="disc/disc_02.svg" alt="" className="img" />
                  </div>
                  <div className="disc-info">
                    <Typography variant="h6" gutterBottom component="div">
                      データ分析と言語化
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      仕様を数値化した数値情報を現状のプロダクトに関して、厳密性を定義した上で解釈可能な情報の範囲を決めます。
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="disc-panel _flex_">
                  <div className="disc-image p-3">
                    <img src="disc/disc_03.svg" alt="" className="img" />
                  </div>
                  <div className="disc-info">
                    <Typography variant="h6" gutterBottom component="div">
                      プロダクト情報のデータ構造の検証
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      分析から数値情報がプロダクトとして、改善するための情報として使える計画を実装可能かを試案化します。
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className="disc-panel _flex_">
                  <div className="disc-image p-3">
                    <img src="disc/disc_04.svg" alt="" className="img" />
                  </div>
                  <div className="disc-info">
                    <Typography variant="h6" gutterBottom component="div">
                      研究機関との連動と分析情報をメタ化する。
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      現状のプロダクト情報の分析方法が現状使っている評価に対して市場のニーズを満たすために最適な方法かを考慮します。
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <div className="disc-panel _flex_">
                  <div className="disc-image p-3">
                    <img src="disc/disc_05.svg" alt="" className="img" />
                  </div>
                  <div className="disc-info">
                    <Typography variant="h6" gutterBottom component="div">
                      プロダクト分析からマネタイズとしてのニーズ条件
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      マネタイズするためのニーズ情報をデータから抽出するための情報を可視化して、言語情報化します。
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <div className="disc-panel _flex_">
                  <div className="disc-image p-3">
                    <img src="disc/disc_06.svg" alt="" className="img" />
                  </div>
                  <div className="disc-info">
                    <Typography variant="h6" gutterBottom component="div">
                      分析情報を全体でで共有
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      試案した方法を再分析するためにズレをなくすための共有プロセスをシステムベースで提供して、情報上のズレを少なくします。
                    </Typography>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <div className="disc-panel _flex_">
                  <div className="disc-image p-3">
                    <img src="disc/disc_01.svg" alt="" className="img" />
                  </div>
                  <div className="disc-info">
                    <Typography variant="h6" gutterBottom component="div">
                      エンドユーザーに提供し、分析サイクルを確立
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      市場でエンドユーザーをベースにプロダクト情報を更新させて、情報を再収集して改修構造を確立及び更新します。
                    </Typography>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Box>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  )
}

export default DiscContent

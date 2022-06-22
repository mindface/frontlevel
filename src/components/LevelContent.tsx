import React, { useRef } from "react";
import { useSelector } from 'react-redux'
import { RootStore } from "../store/modules/reducer";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { dataList } from "./text/level1";

type Data = {
  id: number;
  text: string;
  body: string;
  sub: string;
}

function LevelContent() {
  const levelinfo = useSelector((state: { base: RootStore }) => {
    return state.base.level;
  });

  const list = useRef(dataList);

  return (
    <div className="content p-3">
      {list.current.map((item:Data) => {          
        return (
          <Card className="mb-3" key={item.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.text}
              </Typography>
              <Typography fontSize={14} variant="body1" color="text.secondary">{item.body}
              </Typography>
            </CardContent>
            <CardActions>
           </CardActions>
        </Card>
        )
      })}
    </div>
  );
}

export default LevelContent;

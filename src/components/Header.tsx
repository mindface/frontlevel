import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootStore } from "../store/modules/reducer";

import Typography from '@mui/material/Typography';

type PathObj = {
  path: string;
  text: string;
}

const pagePath = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/view", text: "View" }
];

function Header() {
  const levelinfo = useSelector((state: { base: RootStore }) => {
    return state.base.level.levelsInfo;
  });
  const [pathArray,pathArraySet] = useState(pagePath);

  useEffect(() => {
    const number = Math.ceil(levelinfo.verification/10);
    if(number){
      let pathList: PathObj[] = [];
      let list: PathObj[] = [];
      for (let index = 0; index < number; index++) {
        list.push({ path: `/level/${index+1}`, text: `level${index+1}` });
      }
      pathList = pagePath.concat(list);
      pathArraySet(pathList);
    }
    console.log(levelinfo)
  },[levelinfo]);

  return (
    <>
      <header className="header boxShadow _flex_s_b_">
        <div className="logo">
          <img 
            className="img"
            src="/logo.png"
            alt=""
          />
        </div>
        <ul className="list _flex_ pr-2">
          {pathArray.map((item:PathObj) => {
            return (
              <li className="item" key={item.path}>
                <Link href={item.path}>
                  <a className="link">
                    <Typography variant="subtitle2" gutterBottom component="p">{item.text}</Typography>
                  </a>
                </Link>
              </li>
             )
          })}
        </ul>
      </header>
    </>
  );
}

export default Header;

import { Action } from 'redux'
import { Levels, LevelsInfo, InitalLevelState } from '../../../models/levels'

export function initalLevelState(): InitalLevelState {
  return {
    levelDataItem: [],
    modalView: false,
    levelsInfo: {
      memory: 0,
      target: 0,
      verification: 0,
      info: 0,
    },
    userLevel: 1,
  }
}

export interface LevelAction extends Action {
  type: string
  levelDataItem: Levels[]
  levelsInfo?: LevelsInfo
  userLevel?: number
}

export interface LevelActionFailure extends Action {
  type: string
  err: string
}

export function levelReducer(
  state: any = initalLevelState(),
  action: LevelAction
) {
  switch (action.type) {
    case 'levelinfo/request':
      return {
        ...state,
        isFetching: true,
        levelDataItem: [],
      }
    case 'levelinfo/success':
      return {
        ...state,
        isFetching: false,
        levelDataItem: action['levelDataItem'],
      }
    case 'levelinfo/failure':
      return {
        ...state,
        isFetching: false,
        levelDataItem: [],
      }
    case 'levelinfo/setLevelInfo':
      return {
        ...state,
        isFetching: false,
        levelsInfo: action['levelsInfo'],
      }
    case 'levelinfo/setUserLevel':
      return {
        ...state,
        userLevel: action['userLevel'],
      }
    default:
      return state
  }
}

export const levelFetchDataRequest = (): LevelAction => {
  return {
    type: 'levelinfo/request',
    levelDataItem: [],
  }
}

export const levelFetchDataSuccess = (data: Levels[]): LevelAction => {
  return {
    type: 'levelinfo/success',
    levelDataItem: data,
  }
}

export const levelFetchDataFailure = (err: string): LevelActionFailure => {
  return {
    type: 'levelinfo/failure',
    err: err,
  }
}

// export const AddLvelData = (sendData:any) => {
//   const postSendData = sendData
//   // const host = 'http://interp.php.xdomain.jp/api';
//   const host = 'http://0.0.0.0:8003';
//     const headers:object = {
//       "Access-Control-Allow-Orgin":"*",
//       "Content-Type": "application/json",
//       "Authorization":"Basic YWRtaW46YlI4WiA0N3o0IG5iSTUgMU1zbCBJZXhhIDhwRUo="
//     }
//     try {
//       //  const res = axios.post(`${host}/wp-json/jwt-auth/v1/token`, sendData, headers)
//       //  const res = axios.post(`${host}/wp-json/wp/v2/posts`, JSON.stringify(sendData), headers)
//        const res = axios.post(`${host}/sned.php`, sendData, headers)
//       //  console.log(wrese)
//        const getdata:any = res
//        console.log(getdata)
//     }
//     catch (err) {
//       console.log(err)
//     }
//   return async (dispatch,getState,data) => {
//     dispatch(levelFetchDataRequest())
//     axios.defaults.xsrfCookieName = 'csrftoken'
//     axios.defaults.xsrfHeaderName = "X-CSRFToken"
//     const headers:object = {
//       "Access-Control-Allow-Orgin":"*",
//       "Content-Type": "application/json; charset=utf-8",
//     }
//     // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//     console.log(sendData)
//     try {
//        const res = await axios.post('http://interp.php.xdomain.jp/api/jwt-auth/v1/token', sendData, headers)
//        const getdata:any = res.data
//        console.log(getdata)
//        return dispatch(levelFetchDataSuccess(getdata))
//     }
//     catch (err) {
//        return dispatch(levelFetchDataFailure(err))
//     }
//   }
// }

// export const postLevelData = (sendData: Levels) => {
//   const postSendData = { level: sendData };
//   console.log(postSendData);
//   axios.defaults.xsrfCookieName = "csrftoken";
//   // axios.defaults.baseURL = 'http://localhost:3000';
//   // axios.defaults.xsrfHeaderName = "X-CSRFToken"
//   axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
//   const headers: object = {
//     "Access-Control-Allow-Orgin": "*",
//     "Content-Type": "application/json; charset=utf-8",
//   };

//   levelFetchDataRequest();
//   const res = axios
//     .post("http://localhost:3003/api/levels/", postSendData)
//     .then((res) => {
//       const getdata: any = res.data;
//       return levelFetchDataSuccess(getdata);
//     })
//     .catch((err) => {
//       console.log(err);
//       return levelFetchDataFailure(err);
//     });
// };

// export const getLevelData = () => {
//   console.log("---");
//   return (dispatch: Dispatch) => {
//     dispatch(levelFetchDataRequest());
//     axios.defaults.xsrfCookieName = "csrftoken";
//     axios.defaults.xsrfHeaderName = "X-CSRFToken";
//     const headers: object = {
//       "Access-Control-Allow-Orgin": "*",
//       "Content-Type": "application/json; charset=utf-8",
//     };
//     // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//     axios
//       .get("http://localhost:3003/api/levels/", headers)
//       .then((res) => {
//         dispatch(levelFetchDataSuccess(res.data));
//       })
//       .catch((err) => {
//         dispatch(levelFetchDataFailure(err));
//       });
//   };
// };

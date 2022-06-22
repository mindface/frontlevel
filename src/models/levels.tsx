
export interface InitalLevelState {
  levelDataItem: Levels[];
  modalView: boolean;
  levelsInfo: LevelsInfo;
  userLevel: number;
}

export interface Levels {
  title: String;
  body: String;
  memory: String;
  categorynumber: number;
  guropsnumber: number;
  // user_token: String;
}

export interface LevelsInfo {
  memory: number;
  target: number;
  verification: number;
  info: number;
}

export interface GetLevels {
  id: number;
  title: String;
  body: String;
  category: String;
  created_at: String;
  updated_at: String;
  categorynumber: number;
  guropsnumber: number;
  user_token: any;
}

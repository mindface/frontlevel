import { combineReducers } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as rawUseSelector,
} from "react-redux";
import * as level from "./data_action/levelInfo";
import * as card from "./data_action/card";
import * as modal from "./data_action/modal";
import * as LevelsModels from "../../models/levels";
import * as ModalModels from "../../models/modal";
import * as CardModels from "../../models/card";

export interface RootStore {
  level: LevelsModels.InitalLevelState;
  modal: ModalModels.Modals;
  card: CardModels.Cards;
}

const reducers = combineReducers({
  level: level.levelReducer,
  modal: modal.modalReducer,
  card: card.cardReducer,
});

export const rootReducer = (state: RootStore | undefined, action: any) => {
  if (action?.type === "") {
    state = undefined;
  }
  return reducers(state, action);
};

export const useRootSelector: TypedUseSelectorHook<RootStore> = rawUseSelector;

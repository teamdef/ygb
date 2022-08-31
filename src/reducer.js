import { combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import detailReducer from "./reducers/detailReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // whitelist: [""], -> 그것만 저장합니다.
  // blacklist -> 그것만 제외합니다
};
export const rootReducer = combineReducers({
  value: categoryReducer,
  detail: detailReducer,
});

export default persistReducer(persistConfig, rootReducer);

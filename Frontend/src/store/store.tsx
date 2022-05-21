import { createStore } from "redux";

const initialState = {
  prefectureName: "東京都",
  cityName: "三鷹市",
};

const reducer = (
  state = initialState,
  action: {
    type: string;
    prefectureName: string;
    cityName: string;
  }
) => {
  switch (action.type) {
    case "CHANGE_INPUT_TEXT":
      return {
        prefectureName: action.prefectureName,
        cityName: action.cityName,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

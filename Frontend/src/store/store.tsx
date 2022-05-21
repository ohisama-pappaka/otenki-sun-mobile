import { createStore } from "redux";

const initialState = {
  cityName: "東京都三鷹市",
};

const reducer = (
  state = initialState,
  action: {
    type: string;
    cityName: string;
  }
) => {
  switch (action.type) {
    case "CHANGE_INPUT_TEXT":
      return {
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

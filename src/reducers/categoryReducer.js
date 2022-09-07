const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export const changeCategory = (value) => ({ type: CHANGE_CATEGORY, value });
const initialState = {
  value: undefined,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY: {
      return {
        ...state,
        value: action.value,
      };
    }
    case "reset": {
      return {
        ...state,
        value: undefined,
      };
    }
    default:
      return state;
  }
}

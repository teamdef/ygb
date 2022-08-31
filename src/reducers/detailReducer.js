const CHANGE_DETAIL = "CHANGE_DETAIL";

export const changeDetail = (detail) => ({ type: CHANGE_DETAIL, detail });
const initialState = {
  detail: null,
};

export default function detailReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DETAIL: {
      console.log(action.detail);
      return {
        ...state,
        detail: action.detail,
      };
    }
    case "reset": {
      return {
        ...state,
        detail: null,
      };
    }
    default:
      return state;
  }
}

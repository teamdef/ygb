const CHANGE_SEARCH = "CHANGE_SEARCH";

export const changeSearch = (keyword) => ({ type: CHANGE_SEARCH, keyword });
const initialState = {
  keyword: undefined,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH: {
      return {
        ...state,
        keyword: action.keyword,
      };
    }
    case "reset": {
      return {
        ...state,
        keyword: undefined,
      };
    }
    default:
      return state;
  }
}

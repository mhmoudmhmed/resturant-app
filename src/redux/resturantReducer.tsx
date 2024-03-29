import {
  FETCH_RESTURANTS,
  FETCH_RESTURANTS_SUCCESS,
  FETCH_RESTURANTS_FAILURE,
  SEARCH,
  FILER_TAG,
} from "./resturantAction";

const initialState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null,
  value: "",
};

export default function resturantReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_RESTURANTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RESTURANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.resturants,
      };
    case FETCH_RESTURANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    case SEARCH: {
      const { value } = action;
      return {
        ...state,
        value,
        loading: false,
      };
    }

    case FILER_TAG:
      // const { items } = action;
      // console.log(items);
      return {
        ...state,
        items: action.payload.value,
        loading: false,
      };

    default:
      return state;
  }
}

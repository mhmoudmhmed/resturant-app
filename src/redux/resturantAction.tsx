import data from "../data.json";

export const FETCH_RESTURANTS = "FETCH_RESTURANTS";
export const FETCH_RESTURANTS_SUCCESS = "FETCH_RESTURANTS_SUCCESS";
export const FETCH_RESTURANTS_FAILURE = "FETCH_RESTURANTS_FAILURE";
export const SEARCH = "SEARCH";
export const FILER_TAG = "TAGS";

function getResturant() {
  return fetch("/data.json")
    .then(handleErrors)
    .then((res) => res.json());
}

function fakeGetResturant() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

export function fetchAllResturant() {
  return (dispatch: any) => {
    dispatch(fetchResturants());
    return fakeGetResturant()
      .then((json) => {
        dispatch(fetchResturantsSuccess(json));
        return json;
      })
      .catch((err) => {
        throw err;
      });
  };
}

export function search(value: string) {
  return { type: SEARCH, value };
}
export function filter(value: any) {
  return {
    type: FILER_TAG,
    payload: { value },
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchResturants = () => ({
  type: FETCH_RESTURANTS,
});

export const fetchResturantsSuccess = (resturants: any) => ({
  type: FETCH_RESTURANTS_SUCCESS,
  payload: { resturants },
});

export const fetchResturantsFailure = (error: any) => ({
  type: FETCH_RESTURANTS_FAILURE,
  payload: { error },
});

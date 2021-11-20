import { INITIAL_STATE, GET_OPTION } from "./constant";

const reducer = (state = INITIAL_STATE, payload: any) => {
  switch (payload.type) {
    case GET_OPTION.error:
    case GET_OPTION.loading:
      return {
        ...state,
      };
    case GET_OPTION.success:
      return {
        ...state,
        options: payload?.data,
      };
    default:
      return state;
  }
};

export default reducer;

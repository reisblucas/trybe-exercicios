import { CHANGE_POST } from "../action/actionCreator"

const initialState = {
  data: [],
}

export const reducerReact = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST:
      return {
        ...state,
        data: action,
      }
      default:
        return state;
  }
}

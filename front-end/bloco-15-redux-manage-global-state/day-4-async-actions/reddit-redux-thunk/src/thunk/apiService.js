import { changePostReact } from "../action/actionCreator";

const REQUEST_API = 'REQUEST_API';
// const GET_MESSAGES = 'GET_MESSAGES';

const requestAPI = () => ({ type: REQUEST_API })

export function fetchMessages(page) {
  return async (dispatch) => {
    dispatch(requestAPI);
    try {
      const request = await fetch(`https://www.reddit.com/r/${page}.json`);
      const response = await request.json();
      const data = response.data.children;
      dispatch(changePostReact(data));
    } catch (error) {
      return error;
    }
  }
}

// export function fetchAPI() {
//   return async (dispatch) => {
//     dispatch(requestAPI);
//     try {
//       const request = await fetch('https://aws.random.cat/meow');
//       const response = await request.json();
//       dispatch(getPicture(response));
//     } catch (error) {
//       dispatch(getPicture(error));
//     }
//   }
// }
const REQUEST_API = 'REQUEST_API';
const GET_MESSAGES = 'GET_MESSAGES';

const requestAPI = () => ({ type: REQUEST_API })

const getMessages = (messages) => ({ type: GET_MESSAGES, messages })

export function fetchMessages(page) {
  console.log('entrei aqui',page);
  return async (dispatch) => {
    dispatch(requestAPI);
    try {
      const request = await fetch(`https://www.reddit.com/r/${page}.json`);
      const response = await request.json();
      const data = response.data.children;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
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
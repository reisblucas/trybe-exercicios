export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestAPI);
    try {
      const request = await fetch('https://aws.random.cat/meow');
      const response = await request.json();
      dispatch(getPicture(response));
    } catch (error) {
      dispatch(getPicture(error));
    }
  }
}

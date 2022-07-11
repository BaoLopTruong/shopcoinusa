import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_DATACOIN_SUCCESS = "FETCH_DATACOIN_SUCCESS";
export const FETCH_DETAIL_DATACOIN_SUCCESS = "FETCH_DETAIL_DATACOIN_SUCCESS";
export const FETCH_IMAGECOIN_SUCCESS = "FETCH_IMAGECOIN_SUCCESS";
export const FETCH_DETAIL_IMAGECOIN_SUCCESS = "FETCH_DETAIL_IMAGECOIN_SUCCESS";
export const FETCH_DEPOSIT_SUCCESS = "FETCH_DEPOSIT_SUCCESS";
export const FETCH_DEPOSIT_DETAIL_SUCCESS = "FETCH_DEPOSIT_DETAIL_SUCCESS";
export const FETCH_DEPOSIT_CREATE_SUCCESS = "FETCH_DEPOSIT_DETAIL_SUCCESS";







export const CheckLogin = payload => {
  return async dispatch => {
    const { username, password } = payload;
    if (username === "admin" && password === "letmein") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload
      });
      dispatch(getDataCoin());
      dispatch(getImageCoin());
    } else {
      alert("login failure!");
    }
  };
};

export const getDataCoin = () => {
  return async dispatch => {
    const response = await axios.get(
      "https://api.coincap.io/v2/assets/"
    );
    dispatch({
      type: FETCH_DATACOIN_SUCCESS,
      payload: response.data.data
    });
  };
};

export const getImageCoin = () => {
  return async dispatch => {
    const response = await axios.get(
      "http://localhost:3001/images"
    );
    dispatch({
      type: FETCH_IMAGECOIN_SUCCESS,
      payload: response.data
    });
  };
};


export const getDetailDataCoin = (coinId) => {
  return async dispatch => {
    const response = await axios.get(
      `https://api.coincap.io/v2/assets/${coinId}`
    );
    dispatch({
      type: FETCH_DETAIL_DATACOIN_SUCCESS,
      payload: response.data.data
    });
    dispatch(getDetailImageCoin(coinId));
  };
};

export const getDetailImageCoin = (coinId) => {
  return async dispatch => {
    const response = await axios.get(
      `http://localhost:3001/images/${coinId}`
    );
    dispatch({
      type: FETCH_DETAIL_IMAGECOIN_SUCCESS,
      payload: response.data
    });
  };
};



export const getDeposits = () => {
  return async dispatch => {
    const response = await axios.get(
      "http://localhost:3001/deposits"
    );
    dispatch({
      type: FETCH_DEPOSIT_SUCCESS,
      payload: response.data
    });
  };
};

export const createDeposit = (newDeposit) =>{
  return async dispatch => {
    const response = await axios.post(
      `http://localhost:3001/deposits/`, newDeposit
    );
    dispatch({
      type: FETCH_DEPOSIT_CREATE_SUCCESS,
      payload: response.data
    });
  };
};

export const getDetailDeposit = (depositId) => {
  return async dispatch => {
    const response = await axios.get(
      `http://localhost:3001/deposits/${depositId}`
    );
    dispatch({
      type: FETCH_DEPOSIT_DETAIL_SUCCESS,
      payload: response.data
    });
  };
};

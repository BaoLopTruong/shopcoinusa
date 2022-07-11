import {
  FETCH_IMAGECOIN_SUCCESS,
  FETCH_DATACOIN_SUCCESS,
  FETCH_DETAIL_DATACOIN_SUCCESS,
  FETCH_DETAIL_IMAGECOIN_SUCCESS,
  FETCH_DEPOSIT_SUCCESS,
  FETCH_DEPOSIT_DETAIL_SUCCESS,
  LOGIN_SUCCESS
} from "./action";

const initialState = {
  users: [],
  userlogined: {},
  datacoin: [],
  imagecoin: [],
  detailcoin: {},
  imgcoin: {},
  deposits: [],
  depositdetail: {},
};

const rootReducer = (state = initialState, action) => {

  if (action.type === LOGIN_SUCCESS) {
    return { ...state, userlogined: action.payload };
  }
  if (action.type === FETCH_DATACOIN_SUCCESS) {
    return { ...state, datacoin: action.payload };
  }
  if (action.type === FETCH_IMAGECOIN_SUCCESS) {
    return { ...state, imagecoin: action.payload };
  }
  if (action.type === FETCH_DETAIL_DATACOIN_SUCCESS) {
    return { ...state, detailcoin: action.payload };
  }
  if (action.type === FETCH_DETAIL_IMAGECOIN_SUCCESS) {
    return { ...state, imgcoin: action.payload };
  }
  if (action.type === FETCH_DEPOSIT_SUCCESS) {
    return { ...state, deposits: action.payload };
  }
  if (action.type === FETCH_DEPOSIT_DETAIL_SUCCESS) {
    return { ...state, depositdetail: action.payload };
  }
  

  return state;
};

export default rootReducer;
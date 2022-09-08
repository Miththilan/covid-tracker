import { endPointConnect } from "../../helper/connet";
import { PostConstant } from "../constants";


export const getTotat = () => (dispatch) => {
  try {
    const requestData = {
      method: "GET",
      headers: {
          "content-type": "application/json",
      }
    };
    endPointConnect(
      "covid-19/all",
      requestData,
      PostConstant.GETTOTALSUCCESS,
      PostConstant.GETTOTALTFAIL,
      dispatch
    );
  } catch (err) {
    dispatch({
      type: PostConstant.GETTOTALTFAIL,
      payload: "",
      error: PostConstant.DEFAULTERR,
    });
  }
};


export const getTable = () => (dispatch) => {
  try {
    const requestData = {
      method: "GET",
      headers: {
          "content-type": "application/json",
      }
    };
    endPointConnect(
      "covid-19/all",
      requestData,
      PostConstant.GETTOTALSUCCESS,
      PostConstant.GETTOTALTFAIL,
      dispatch
    );
  } catch (err) {
    dispatch({
      type: PostConstant.GETTOTALTFAIL,
      payload: "",
      error: PostConstant.DEFAULTERR,
    });
  }
};

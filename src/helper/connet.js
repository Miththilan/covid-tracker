export function HandleResponse(response) {
    return response.text().then((text) => {
      if (!response.ok) {
        var callStatus = response.status;
        if (callStatus === 401) {
         // Handle Unauthorized Access
        }
        const error = "Sorry, something went wrong. Please try again later..";
        return Promise.reject(error);
      }
      const data = text && JSON.parse(text);
      return data;
    });
}

export function endPointConnect(url, data, succssType, failType, dispatch) {
    fetch(process.env.REACT_APP_API_URL + url, data)
      .then(HandleResponse)
      .then((result) => {
          dispatch({
            type: succssType,
            payload: result,
            // error: message,
          });
        
      })
      .catch((error) => {
        dispatch({
          type: failType,
          payload: "",
          error: "Sorry, something went wrong. Please try again later."
        });
      });
  }
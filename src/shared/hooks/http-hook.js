import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";
import { api_key } from "../../variable";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(async (url, method = "GET") => {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    let respone;

    await axios({
      method,
      url: url + api_key,
      signal: httpAbortCtrl.signal,
    })
      .then((res) => {
        respone = res;
      })
      .catch((err) => {
        setIsLoading(false);
        if(axios.isCancel(err)) {
          console.log(err.message)
        } else {
          setError("Message: " + err.response.data.message.charAt(0).toUpperCase() + err.response.data.message.slice(1));
        }
        throw err;
      });

    activeHttpRequests.current = activeHttpRequests.current.filter(
      (reqCtrl) => reqCtrl !== httpAbortCtrl
    );

    setIsLoading(false);
    return respone;
  }, []);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
/**
 * xgRequest.js
 */

import XgHttp from "./xgHttp";

export default {
  sendRequest(url,urlPar){
    return XgHttp("GET",url, { urlParams: urlPar })
  }
};

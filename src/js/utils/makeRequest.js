import axios from "axios";

export const makeRequest = async (cfg) => {
  const { url = "", method = "get", data = null, responseType = "json" } = cfg;
  if(!url) {
    return Promise.reject("No url provided");
  }
  try {
    const response = await axios({
      url,
      method,
      params: method.toLowerCase() === "get" ? data : null,
      data: method.toLowerCase() === "post" ? data : null,
      responseType
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
}
import { baseAxios } from "./baseAxios";

export const searchApi = async (query) => {
  const response = await baseAxios
    .get(`/search?query=${query.toString().split(" ").join("+")}`)
    .then((response) => response.data);
    console.log("Search API ===> ", response);

  return response;
}

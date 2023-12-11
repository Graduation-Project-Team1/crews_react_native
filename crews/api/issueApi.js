import { baseAxios } from "./baseAxios";

export const snsDataApi = async () => {
  const response = await baseAxios
    .get('/sns/6908')
    .then((response) => response.data);
    // console.log("SNS Data API ===> ", response);

  return response;
}

export const totalNewsApi = async () => {
  const response = await baseAxios
    .get('/totalNews/6908')
    .then((response) => response.data);
    // console.log("Total News API ===> ", response);

  return response;
}

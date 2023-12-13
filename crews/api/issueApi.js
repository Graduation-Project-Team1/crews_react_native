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
    .get('/news/6908')
    .then((response) => response.data);
    // console.log("Total News API ===> ", response);

  return response;
}

export const communityDataApi = async () => {
  const response = await baseAxios
    .get('/community/6908')
    .then((response) => response.data);
    // console.log("Community Data API ===> ", response);

  return response;
}

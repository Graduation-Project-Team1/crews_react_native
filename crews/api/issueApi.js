import { baseAxios } from "./baseAxios";

export const snsDataApi = async (teamId) => {
  const response = await baseAxios
    .get(`/sns/${teamId}`)
    .then((response) => response.data);
    // console.log("SNS Data API ===> ", response);

  return response;
}

export const totalNewsApi = async (teamId) => {
  const response = await baseAxios
    .get(`/news/${teamId}`)
    .then((response) => response.data);
    // console.log("Total News API ===> ", response);

  return response;
}

export const communityDataApi = async (teamId) => {
  const response = await baseAxios
    .get(`/community/${teamId}`)
    .then((response) => response.data);
    // console.log("Community Data API ===> ", response);

  return response;
}

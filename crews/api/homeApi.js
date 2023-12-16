import { baseAxios } from "./baseAxios";

export const mainNewsApi = async (teamId) => {
  const response = await baseAxios
    .get(`/news/${teamId}`)
    .then((response) => response.data);
    // console.log("Main News API ===> ", response);

  return response;
}

export const emotionApi = async (teamId) => {
  const response = await baseAxios 
    .get(`/community/${teamId}/emotion`)
    .then((response) => response.data);
    console.log("Emotion ===> ", response);

  return response;
}

export const trendApi = async (teamId) => {
  const response = await baseAxios
    .get(`/community/${teamId}/keyword`)
    .then((response) => response.data);
    // console.log("Trend ===> ", response);

  return response;
}

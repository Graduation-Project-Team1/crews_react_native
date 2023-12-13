import { baseAxios } from "./baseAxios";

export const mainNewsApi = async () => {
  const response = await baseAxios
    .get('/news/6908')
    .then((response) => response.data);
    // console.log("Main News API ===> ", response);

  return response;
}

export const emotionApi = async () => {
  const response = await baseAxios 
    .get('/community/6908/emotion')
    .then((response) => response.data);
    console.log("Emotion ===> ", response);

  return response;
}

export const trendApi = async () => {
  const response = await baseAxios
    .get('/community/6908/keyword')
    .then((response) => response.data);
    // console.log("Trend ===> ", response);

  return response;
}

import { baseAxios } from "./baseAxios";

export const kakaoLoginApi = async (code) => {
  const response = await baseAxios
    .get(`/kakao/getCI?code=${code}`)
    .then((response) => response.data);
  
  console.log('KAKAO TOKEN --> ', response);
  return response;
}
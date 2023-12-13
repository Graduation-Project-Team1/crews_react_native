import React, { useEffect } from "react";
import { View } from "react-native";
import { KAKAO_REDIRECT_URI, KAKAO_API_KEY } from "@env";
import WebView from "react-native-webview";
import { storeToken } from "../../api/asyncStorage";

const KakaoLogin = ({navigation, setIsLogin}) => {
  useEffect(() => {
    console.log("KakaoLogin");
  }, []);

  const getToken = (data) => {
    console.log("data: ", data);

    // 정규 표현식을 사용하여 HTML 응답에서 JSON 문자열 추출
    const match = data.match(/<pre[^>]*>(.*?)<\/pre>/);
    const jsonStr = match && match[1] ? match[1] : "";

    // 추출된 JSON 문자열 파싱
    const parsedBody = JSON.parse(jsonStr);
    console.log("parsedBody: ", parsedBody);

    setIsLogin(true);

    // if (parsedBody.success === true && parsedBody.token !== null) {
    //   storeToken(parsedBody.token);
    //   setIsLogin(true);
    // } else if (parsedBody.message === 'preference' && parsedBody.token === null) {
    //   navigation.navigate("Onboarding");
    // } else {
    //   console.log("error");
    // }
  };

  const INJECTED_JAVASCRIPT = `
    function getToken() {
      const html = document.documentElement.outerHTML;
      window.ReactNativeWebView.postMessage(html);
    }
    requestAnimationFrame(getToken);
    console.log("INJECTED_JAVASCRIPT");
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT.toString()}
        javaScriptEnabled={true}
        onMessage={(event) => {
          const data = event.nativeEvent.data;
          getToken(data);
        }}
      />
    </View>
  );
};

export default KakaoLogin;

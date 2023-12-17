import React, { useCallback, useEffect, useRef } from "react";
import { View } from "react-native";
import { KAKAO_REDIRECT_URI, KAKAO_API_KEY } from "@env";
import WebView from "react-native-webview";
import { storeMemberId, storeToken } from "../../api/asyncStorage";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { userTeamState } from "../../recoil/teamState";

const KakaoLogin = ({navigation, setIsLogin}) => {
  const webViewRef = useRef();
  const [currentState, setCurrentState] = useRecoilState(userTeamState);

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

    if (parsedBody.success === true && parsedBody.token !== null && parsedBody.memberId !== null) {
      storeMemberId(parsedBody.memberId.toString());
      storeToken(parsedBody.token);
      setCurrentState({
        ...currentState,
        memberId: parsedBody.memberId,
      })
      console.log(`멤버 아이디 & 토큰 저장됨 : ${parsedBody.memberId}, ${parsedBody.token}`);
      setIsLogin(true);
    } else if (parsedBody.message === 'preference' && parsedBody.token === null && parsedBody.memberId !== null) {
      storeMemberId(parsedBody.memberId.toString());
      setCurrentState({
        ...currentState,
        memberId: parsedBody.memberId,
      })
      console.log("멤버 아이디 저장됨 : ", parsedBody.memberId);
      navigation.navigate("Onboarding");
    } else {
      console.log("error");
    }
  };

  const onNavigationStateChange = (navState) => {
    webViewRef.current.postMessage("focus");
  };

  const onMessage = (event) => {
    const data = event.nativeEvent.data;
    if (data.includes("memberId")) {
      console.log("멤버아이디 있음");
      getToken(data);
    } else {
      console.log("멤버아이디 없음");
    }
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
      ref={webViewRef}
        style={{ flex: 1 }}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled={true}
        onMessage={onMessage}
        onNavigationStateChange={onNavigationStateChange}
      />
    </View>

    
  );
};



export default KakaoLogin;

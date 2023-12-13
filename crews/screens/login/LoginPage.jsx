import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Logo from '../../assets/logo/logo.svg';
import LogoText from '../../assets/logo/logo_text.svg';
import Google from '../../assets/login_google.png';
import Kakao from '../../assets/login_kakao.png';

const LoginPage = ({navigation}) => {
  const handleKakaoLogin = () => {
    console.log("kakao login");
    navigation.navigate("KakaoLogin");

  }

  const handleGoogleLogin = () => {
    console.log("google login");
  }

  return (
    <View style={loginPageStyle.container}>
      <View style={loginPageStyle.logoContainer}>
        <View style={loginPageStyle.logo}>
          <Logo/>
          <LogoText/>
        </View>
      </View>
      <View style={loginPageStyle.loginContainer}>
        <TouchableOpacity onPress={handleKakaoLogin}>
          <Image style={loginPageStyle.loginImg} source={Kakao} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleLogin}>
          <Image style={loginPageStyle.loginImg} source={Google} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;

export const loginPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#2A2CBB"
  },

  logoContainer : {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
  },

  loginContainer: {
    width: "100%",
    borderTopLeftRadius: 85,
    paddingHorizontal: 38,
    paddingVertical: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
    backgroundColor: "#fff",
  },

  loginImg: {
    width: 320,
    height: 48,
  }
});
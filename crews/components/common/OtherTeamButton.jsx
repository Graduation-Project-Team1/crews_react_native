import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ThemeContext } from "styled-components";
import { otherTeamState, prevTeamState, userTeamState } from "../../recoil/teamState";

const OtherTeamButton = () => {
  const theme = useContext(ThemeContext);
  const setOtherTeamMode = useSetRecoilState(otherTeamState);
  const setUserTeam = useSetRecoilState(userTeamState);
  const [prevTeam, setPrevTeam] = useRecoilState(prevTeamState);

  const handleBackToMyTeam = () => {
    setOtherTeamMode(false);
    
    setUserTeam({
      name: prevTeam.name,
      id: prevTeam.id,
    });

    setPrevTeam({
      name: null,
      id: null,
    });
  };


  return (
    <TouchableOpacity style={[otherTeamButtonStyle.base, {
      backgroundColor: theme.secondary,
    }]}
    onPress={handleBackToMyTeam}>
      <Text style={[otherTeamButtonStyle.text]}>
        우리 팀으로 돌아가기
      </Text>
    </TouchableOpacity>
  );
};

export default OtherTeamButton;

export const otherTeamButtonStyle = StyleSheet.create({
  base: {
    width: 150,
    height: 35,
    position: "absolute",
    top: 50,
    marginHorizontal: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
});
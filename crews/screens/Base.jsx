import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { getMemberId, getMemberName, getPlayerId, getPlayerName, getTeamId, getTeamName, getTheme, storeMemberId, storeMemberName, storePlayerId, storePlayerName, storeTeamId, storeTeamName, storeTheme } from '../api/asyncStorage';
import { otherTeamState, userTeamState } from '../recoil/teamState';
import { themeState } from '../recoil/themeState';
import { darkTheme, lightTheme, teamTheme, theme6908, theme7646 } from '../styles/themes';
import Auth from './Auth';
import axios from 'axios';

const Base = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [currentTeam, setCurrentTeam] = useRecoilState(userTeamState);
  const isOtherTeamMode = useRecoilValue(otherTeamState);
  const [userMemberId, setUserMemberId] = useState('');


  useEffect(() => {
    getTheme().then((theme) => {
      if (theme === null) {
        storeTheme(currentTheme);
      } else {
        console.log(theme);
        setCurrentTheme(theme);
      }
    });

    getMemberId().then((memberId) => {
      if (memberId === null) {
        storeMemberId(currentTeam.memberId);
      } else {
        console.log(memberId);
        setUserMemberId(Number(memberId));
      }
    });
  }, []);

  useEffect(() => {
    if (userMemberId === '') return;

    const responseUserdata = axios.get(`https://crews.jongmin.xyz/member/${userMemberId}`)
        .then((response) => {
          storeMemberName(response.data.nickname);
          storeTeamName(response.data.teamName);
          storeTeamId(response.data.teamId.toString());
          storePlayerName(response.data.playerName);
          storePlayerId(response.data.playerId.toString());
          setCurrentTeam({
            ...currentTeam,
            name: response.data.teamName,
            id: response.data.teamId,
            playerName: response.data.playerName,
            playerId: response.data.playerId,
            memberId: userMemberId,
            memberName: response.data.nickname,
          });
        })
        .catch((error) => {
          console.log("error: ", error);
        })

  }, [userMemberId]);

  useEffect(() => {
    console.log("CURRENT STATE : " , currentTeam);
  }, [currentTeam]);

  useEffect(() => {
    if (!isOtherTeamMode) {
      storeTheme(currentTheme);
    }
  }, [currentTheme]);

  // useEffect(() => {
  //   if (!isOtherTeamMode) {
  //     storeTeamName(currentTeam.name);
  //   }
  // }, [currentTeam.name]);

  // useEffect(() => {
  //   if (!isOtherTeamMode) {
  //     storeTeamId(currentTeam.id.toString());
  //   }
  // }, [currentTeam.id]);

  useEffect(() => {
    console.log(isOtherTeamMode);
  }, [isOtherTeamMode]);

  const queryClient = new QueryClient();
  
  return (
    <ThemeProvider theme={
      currentTheme === 'light' ? lightTheme 
        : currentTheme === 'dark' ? darkTheme 
          : currentTheme === 'team' ? 
            currentTeam === null ? theme6908 :
            currentTeam.id === 6908 ? theme6908 
            : currentTeam.id === 7646 ? theme7646 
            : theme6908 
          : theme7646 
    }>
      <QueryClientProvider client={queryClient}>
          <Auth/>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Base;
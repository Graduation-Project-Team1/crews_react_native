import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { getTeamId, getTeamName, getTheme, storeTeamId, storeTeamName, storeTheme } from '../api/asyncStorage';
import { otherTeamState, userTeamState } from '../recoil/teamState';
import { themeState } from '../recoil/themeState';
import { darkTheme, lightTheme, teamTheme, theme6908, theme7646 } from '../styles/themes';
import Auth from './Auth';

const Base = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const [currentTeam, setCurrentTeam] = useRecoilState(userTeamState);
  const isOtherTeamMode = useRecoilValue(otherTeamState);

  useEffect(() => {
    getTheme().then((theme) => {
      if (theme === null) {
        storeTheme(currentTheme);
      } else {
        console.log(theme);
        setCurrentTheme(theme);
      }
    });

    getTeamName().then((teamName) => {
      if (teamName === null) {
        storeTeamName(currentTeam.name);
      } else {
        console.log(teamName);
        setCurrentTeam({
          ...currentTeam,
          name: teamName,
        });
      }
    });

    getTeamId().then((teamId) => {
      if (teamId === null) {
        storeTeamId(currentTeam.id);
      } else {
        console.log(teamId);
        setCurrentTeam({
          ...currentTeam,
          id: Number(teamId),
        });
      }
    });
    console.log("BASE USEEFFECT : ", currentTeam);
  }, []);

  useEffect(() => {
    if (!isOtherTeamMode) {
      storeTheme(currentTheme);
    }
  }, [currentTheme]);

  useEffect(() => {
    if (!isOtherTeamMode) {
      storeTeamName(currentTeam.name);
    }
  }, [currentTeam.name]);

  useEffect(() => {
    if (!isOtherTeamMode) {
      storeTeamId(currentTeam.id.toString());
    }
  }, [currentTeam.id]);

  useEffect(() => {
    console.log(isOtherTeamMode);
  }, [isOtherTeamMode]);

  const queryClient = new QueryClient();
  
  return (
    <ThemeProvider theme={
      currentTheme === 'light' ? lightTheme 
        : currentTheme === 'dark' ? darkTheme 
          : currentTheme === 'team' ? 
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
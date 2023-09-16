import React,{createContext, useContext, useState} from 'react';

const nicknameConText = createContext("크루즈회원");

export function useNicknameData() {
  return useContext(nicknameConText);
}

export function NicknameDataProvider({children}){
  const [nicknameData, setNicknameData] = useState(null);

  const enterNickname = (nick) => {
    setNicknameData(nick);
  };

  return (
    <nicknameConText.Provider value = {{ nicknameData, setNicknameData, enterNickname }}>
      {children}
    </nicknameConText.Provider>
  );
}

const TeamDataContext = createContext();

export function useTeamData() {
  return useContext(TeamDataContext);
}

export function TeamDataProvider({ children }) {
  const [teamData, setTeamData] = useState(null);

  const onTeamClick = (team) => {
    setTeamData(team);
  };

  return (
    <TeamDataContext.Provider value={{ teamData, setTeamData, onTeamClick }}>
      {children}
    </TeamDataContext.Provider>
  );
}

const MemberDataConText = createContext();

export function useMemberData() {
  return useContext(MemberDataConText);
}

export function MemberDataProvider({children}){
  const [memberData, setMemberData] = useState(null);

  const onMemberClick = (member) => {
    setMemberData(member);
  };

  return (
    <MemberDataConText.Provider value = {{ memberData, setMemberData, onMemberClick }}>
      {children}
    </MemberDataConText.Provider>
  );
}
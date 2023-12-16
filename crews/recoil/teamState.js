import { atom } from "recoil";

export const userTeamState = atom({
  key: 'userTeamState',
  default: {
    name: '전북현대',
    id: 6908,
    playerName: '조규성',
    playerId: 0,
    memberName: '이름',
    memberId: 0,
  }
});

export const otherTeamState = atom({
  key: 'otherTeamState',
  default: false,
});

export const prevTeamState = atom({
  key: 'prevTeamState',
  default: {
    name: null,
    id: null,
  }
});
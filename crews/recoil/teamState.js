import { atom } from "recoil";

export const userTeamState = atom({
  key: 'userTeamState',
  default: {
    name: '가나다',
    id: 0,
    playerName: '강어진',
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
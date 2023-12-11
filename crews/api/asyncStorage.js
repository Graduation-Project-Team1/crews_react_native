import AsyncStorage from '@react-native-async-storage/async-storage';

// theme
export const storeTheme = async (theme) => {
  try {
    await AsyncStorage.setItem('theme', theme);
  } catch (error) {
    console.log(error);
  }
};

export const getTheme = async () => {
  try {
    const theme = await AsyncStorage.getItem('theme');
    if (theme !== null) {
      return theme;
    } else {
      return 'light';
    }
  } catch (error) {
    console.log(error);
  }
};

// team
export const storeTeamName = async (name) => {
  try {
    await AsyncStorage.setItem('teamName', name);
  } catch (error) {
    console.log(error);
  }
};

export const getTeamName = async () => {
  try {
    const name = await AsyncStorage.getItem('teamName');
    if (name !== null) {
      return name;
    } else {
      return '전북현대';
    }
  } catch (error) {
    console.log(error);
  }
};

export const storeTeamId = async (id) => {
  try {
    await AsyncStorage.setItem('teamId', id);
  } catch (error) {
    console.log(error);
  }
};

export const getTeamId = async () => {
  try {
    const id = await AsyncStorage.getItem('teamId');
    if (id !== null) {
      return id;
    } else {
      return '6908';
    }
  } catch (error) {
    console.log(error);
  }
};
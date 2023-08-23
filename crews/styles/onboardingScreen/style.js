
import { StyleSheet } from 'react-native';

export const commonStyle = StyleSheet.create({
    alignment: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    boldText: {
      fontWeight:'bold', 
      fontSize: 15, 
      marginBottom: 5
    },
    text: {
      fontSize: 12
    }
  });
  
  export const swiperStyle = StyleSheet.create({
    nextBtn: {
      backgroundColor: '#276A52',
      width: 390,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    btnText: {
      color: '#ffffff',
      fontSize: 15,
      fontWeight: 'bold'
    }
  });
  
  export const profileStyle = StyleSheet.create({
    image: {
      width: 220,
      height: 220,
      marginBottom: 40
    },
    textInputView: {
      width: 150,
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  
  export const myMemberStyle = StyleSheet.create({
    imageView: {
      width : 100, 
      height : 100,
      backgroundColor: '#dddddd',
      borderRadius: 100,
      marginBottom: 10
    },
    headerView: {
      flex: 2,
      alignItems: 'center',
      paddingTop: 60,
      paddingBottom: 20
    },
    centerView: {
      flex: 4, alignItems: 'center', 
      justifyContent: 'center', 
      padding: 10,
      marginBottom: 20
    },
    teamImageView: {
      width: 150,
      height: 150,
      backgroundColor: '#dddddd',
      borderRadius: 100,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    line: {
      borderWidth: 1,
      borderColor: '#dddddd',
    },
    bottomView: {
      flex: 11, 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 20,
    },
    rowView: {
      flexDirection: 'row',
      flexWrap: 'wrap', 
      justifyContent: 'space-between'
    }
  });
  
  export const checkStyle = StyleSheet.create({
    headerView: {
      flex:4,
      alignItems: 'center',
      paddingTop: 60
    },
    profileView: {
      flex:17,
      alignItems: 'center',
      paddingTop: 10
    },
    image: {
      width: 220,
      height: 220,
    },
    nicknameView: {
      flexDirection: 'row',
      marginTop: 40
    },
    nickname: {
      fontSize: 25, 
      fontWeight: 'bold'
    },
    text: {
      fontSize: 20, 
      marginTop: 5, 
      marginLeft: 5
    }
  });
  
  export const myTeamStyle = StyleSheet.create({
    categoryView: {
      width: 90,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      marginRight: 5,
      backgroundColor: '#276A52'
    },
    categoryText: {
      color: '#ffffff', 
      fontWeight: 'bold'
    },
    leagueCategoryView: {
      height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        borderColor: '#276A52',
        backgroundColor: '#ffffff'
    },
    leagueCategoryText: {
      color: '#276A52', 
      fontWeight: 'bold'
    },
    sportTeamView: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
    },
    sportTeamImage: {
      width : 100, 
      height : 100,
      backgroundColor: '#dddddd',
      borderRadius: 100,
      marginBottom: 10
    },
    sportTeamText: {
      fontWeight: 'bold'
    },
    headerView: {
      flex: 2,
      alignItems: 'center',
      paddingTop: 60
    },
    categoryMenuView: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    bottomView: {
      flex: 13,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    rowView: {
      flexDirection: 'row',
      flexWrap: 'wrap', 
      justifyContent: 'space-between'
    }
  });
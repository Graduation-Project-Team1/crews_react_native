
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const commonStyle = StyleSheet.create({
    alignment: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    boldText: {
      fontWeight:'bold', 
      fontSize: 20, 
      marginBottom: 5
    },
    text: {
      fontSize: 13
    }
  });

export const swiperStyle = StyleSheet.create({
  nextBtn: {
    width: 390,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom:10
  },
  btnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export const profileStyle = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    width: 200,
    paddingBottom:5,
    borderBottomColor: colors.iconGray,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const myMemberStyle = StyleSheet.create({
  imageViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    paddingBottom: 10,
    marginBottom: 50
  },
  rowView: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
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
    backgroundColor: colors.primary
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
    borderColor: colors.primary,
    backgroundColor: '#ffffff'
  },
  leagueCategoryText: {
    color: colors.primary, 
    fontWeight: 'bold'
  },
  sportTeamView: {
    alignItems: 'center',
    margin: 5,
    width: 100,
    height: 170
  },
  sportTeamImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },  
  sportTeamImage: {
    width : 100, 
    height : 100,
    backgroundColor: '#dddddd',
    borderRadius: 100,
    marginBottom: 10
  },
  sportTeamText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headerView: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 60
  },
  categoryMenuView: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  bottomView: {
    flex: 13,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 10,
    marginBottom: 50
  },
  rowView: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
  }
});

export const ThemeScreenStyle = StyleSheet.create({

  headerView: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 60
  },
});


export const checkStyle = StyleSheet.create({

  view: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, 
    marginLeft: 5
  }
});

import {StyleSheet} from 'react-native';
import colors from '../colors';



export const bannerStyles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 70,
        marginBottom: 10, 
        backgroundColor: colors.primaryLight,
        borderRadius:15,
        paddingHorizontal: 13,
        justifyContent: 'center'
    },
})

export const playListStyles = StyleSheet.create({
    list: {
        borderRadius:10,
        flexDirection: 'row',
        marginBottom:7,
        height: 60,
        alignItems: 'center'
    },
    id: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textView: {
        flexDirection: 'column',
        paddingLeft: 15,
        flex: 8
    },
    iconView: {
        alignItems: 'center',
        justifyContent:'center',
        height: '100%',
        marginRight: 15
    },
    titleText: {fontSize: 14, marginBottom: 2},
    time: {fontSize: 12, color: colors.textGray},
})

export const playerStyles = StyleSheet.create({
    player: {
        height: 75,
        width: '100%',
        position: 'absolute',
        bottom: 70,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        paddingVertical: 15,
        backgroundColor: '#ffffff'
    }, 
    textView: {
        flexDirection: 'column',
        paddingLeft: 15,
        flex: 6
    },
    titleText: {fontWeight: 'bold', fontSize: 15, marginBottom: 2},
    time: {fontSize: 12, color: colors.textGray},
    iconView: {
        flexDirection: 'row',
        alignItems: 'stretch',
        alignItems: 'center',
        marginRight: 15,
        flex: 3
    }
})

export const PlayerScreenStyles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    playBtn: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 200,
    },
    img: {
        width: 260,
        height: 260,
        position: 'absolute', 
        alignSelf: 'center', 
        top: 190,
        backgroundColor: '#000000'
    },
    topBtnView :{
        height: 30,
        flexDirection: 'row',
        width: 350,
        paddingHorizontal: 15,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    centerText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    timeText: {
        fontSize: 15,
        color: colors.textGray,
        fontWeight: '400'
    }
})

export const viewStyles = StyleSheet.create({
    alignBtn: {
        borderRadius:50,
        height: 35, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:5,
        borderWidth:1,
        borderColor: colors.textGray,
        paddingLeft: 12,
        paddingRight: 7
    }
})


import {StyleSheet} from 'react-native';
import myColors from './colors';

export const bannerStyles = StyleSheet.create({
    banner: {
        backgroundColor: myColors.mainColor,
        marginRight: 20,
        borderRadius:10,
        elevation: 10
    },
    text: {
        color: '#FFFFFF', fontWeight: 'bold'
    },
    imgView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10
    },
    img:{
        width: 88,
        height: 127,
        resizeMode: 'cover',
        overflow: 'hidden'
    }
})

export const playListStyles = StyleSheet.create({
    list: {
        borderRadius:10,
        flexDirection: 'row',
        marginBottom:7,
        flex: 1
    },
    img: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        overflow: 'hidden'
    },
    textView: {
        flexDirection: 'column',
        paddingLeft: 30,
        flex: 8
    },
    iconView: {
        alignItems: 'stretch',
        flex: 1
    },
    titleText: {fontWeight: 'bold', fontSize: 12, marginBottom: 2},
    time: {fontSize: 10, color: '#212121'},
})

export const playerStyles = StyleSheet.create({
    player: {
        flex: 1,
        borderRadius:20,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor: myColors.musicColor
    }, 
    textView: {
        flexDirection: 'column',
        paddingLeft: 30,
        flex: 6
    },
    titleText: {fontWeight: 'bold', fontSize: 15, marginBottom: 2},
    time: {fontSize: 12, color: '#212121'},
    iconView: {
        flexDirection: 'row',
        alignItems: 'stretch',
        alignItems: 'center',
        marginRight: 15,
        flex: 3
    }
})

export const viewStyles = StyleSheet.create({
    alignBtn: {
        borderRadius:10,
        flexDirection: 'row',
        marginRight:5,
        borderWidth:1,
        borderColor: '#79747E',
        padding: 2,
        paddingLeft: 7,
        paddingRight: 7
    }
})


import {StyleSheet} from 'react-native';

export const headerStyles = StyleSheet.create({
    view: {
        height: 50,
        marginTop: 25,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 12
    },
    title: {
        fontSize: 17, 
        fontWeight: 'bold'
    }
})

export const profileStyles = StyleSheet.create({
    view: {
        height: 100,
        flexDirection: 'row'
    },
    ImageView: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImg: {
        backgroundColor: '#a21456',
        borderRadius: 100,
        height: 70, 
        width: 70
    },
    platformImg: {
        backgroundColor: '#ade315',
        borderRadius: 100,
        height: 27, 
        width: 27,
        position: 'absolute',
        right: 15,
        bottom: 15
    },
    textView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    nickname: {
        fontSize: 15, 
        fontWeight: 'bold'
    },
    platformName: {
        fontSize: 12, 
        color: '#A3A3A3',
        marginTop: 5
    }
})
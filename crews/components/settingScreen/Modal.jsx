import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import colors from "../../styles/colors";

const AccountModal = (props) => {

    return(
        <Modal 
            isVisible={props.visible} 
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
        >
            <View style = {{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    backgroundColor: "#ffffff", 
                    height: 190,
                    width: 300, 
                    borderRadius: 15,
                }}>
                    <View style = {{
                        flex: 2,
                        alignItems:'center',
                        justifyContent: 'center',
                        paddingTop: 15,
                        whiteSpace: 'pre-wrap'
                    }}>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', marginBottom: 5}}>{props.title}</Text>
                        <Text style = {{fontSize: 12, textAlign: 'center'}}>{props.detail}</Text>
                    </View>
                    <View style = {{
                        flex: 1,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity 
                        style = {{
                            width: 130, 
                            height: 40, 
                            backgroundColor: "#000000",
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 7
                            }} 
                        onPress={props.onCancel}>
                            <Text style = {{color: "#ffffff"}}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style = {{
                            width: 130, 
                            height: 40, 
                            backgroundColor: colors.primary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 7
                            }} 
                        onPress={props.onCancel}>
                            <Text style = {{color: "#ffffff"}}>{props.yesButton}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AccountModal;
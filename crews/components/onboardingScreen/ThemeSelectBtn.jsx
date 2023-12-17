import React, { useContext } from 'react';
import { TextInput} from 'react-native';
import { Text, View} from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { RadioButton } from 'react-native-paper';
import { ThemeContext } from 'styled-components';


const ThemeSelectBtn = (props) =>{
    const theme = useContext(ThemeContext);
    return (
        <View style = {{
                height:60,
                width: "100%",
                paddingHorizontal:3,
                borderBottomWidth: 1,
                borderBottomColor: colors.dividerGray,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style = {{
                flexDirection: 'row',
                alignItems: 'center',
                }}>
                {
                    props.color ?
                    <View style = {{
                        width:18,
                        height:18,
                        borderRadius: 100,
                        marginRight: 10,
                        backgroundColor: props.color,
                        }}/> : null
                }
                
                <Text style = {{fontSize: 16, color: theme.text}}>{props.text}</Text>
                </View>
                <RadioButton
                value="first"
                color={colors.primary}
                status={ props.checked === props.value ? 'checked' : 'unchecked' }
                onPress={() => props.setChecked(props.value)}
                />
            </View>
    )
}

export default ThemeSelectBtn;
import React, {useState, useContext} from "react";
import { View, Text, Switch } from "react-native";
import { ThemeContext } from "styled-components/native";


const ToggleSetting = (props) =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const theme = useContext(ThemeContext);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style = {{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 35
        }}>
            <View>
                <Text style = {{fontSize:15,}}>{props.title}</Text>
                <Text style = {{fontSize:13, paddingTop: 5, color: '#8c8b8d'}}>{props.discription}</Text>
            </View>
            <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            trackColor={{false: '#8c8b8d', true: theme.primaryLight}}
            thumbColor={isEnabled ? theme.primaryLightMore : '#f4f3f4'}
            />
        </View>
    )
}

export default ToggleSetting;
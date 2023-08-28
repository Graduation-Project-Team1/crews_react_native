import { Text } from "react-native";
import { positionTextStyle } from "../../../styles/analysisScreen/playerScreen/positionText"; 

const PositionText = () => {
    return(
      <Text style={positionTextStyle.layout}>Goalkeepers</Text>  
    );
};

export default PositionText;
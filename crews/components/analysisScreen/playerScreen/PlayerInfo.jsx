import React from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";

const PlayerInfo = (props) => {
  const { statInfo } = props;

  return (
    <ScrollView>
      <Text style={{marginLeft:10,marginTop:20,fontWeight:'bold'}}>GK(3)</Text>
      <View style={{flexDirection:"row",marginTop:10,marginLeft:10,marginRight:10,borderWidth:1,borderRadius:10,borderColor:'#ccc'}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:17,paddingLeft:19,paddingRight:30, borderBottomWidth: 1,borderColor: "#ccc"}}>이름</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[2][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[3][0]}</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
          <View style={{flexDirection:"column",borderBottomWidth: 1,borderColor: "#ccc"}}>
            <Text style={{marginTop:17,borderBottomWidth: 1,borderColor: "#ccc"}}>   
              포지션       선방        실점        무실점경기      슈팅        파울        경고        퇴장   패널티킥   경기수
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 17, marginLeft: 5 }}>
              <Text style={{ flex: 1,marginRight:5 }}>GK</Text>
              <Text style={{ flex: 1, marginRight: 15}}>{statInfo[2][2]}</Text>
              <Text style={{ flex: 1, marginRight: 15}}>{statInfo[2][3]}</Text>
              <Text style={{ flex: 1, marginRight: 15}}>{statInfo[2][4]}</Text>
              <Text style={{ flex: 1, marginRight: 15 }}>{statInfo[2][5]}</Text>
              <Text style={{ flex: 1, marginRight: 20 }}>{statInfo[2][6]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[2][7]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[2][8]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[2][9]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[2][10]}</Text>
              
            </View>

            <View style={{ flexDirection: 'row', marginTop: 17, marginLeft: 5 }}>
              <Text style={{ flex: 1,marginRight:5 }}>GK</Text>
              <Text style={{ flex: 1, marginRight: 15}}>{statInfo[3][2]}</Text>
              <Text style={{ flex: 1, marginRight: 15 }}>{statInfo[3][3]}</Text>
              <Text style={{ flex: 1, marginRight: 15 }}>{statInfo[3][4]}</Text>
              <Text style={{ flex: 1, marginRight: 15 }}>{statInfo[3][5]}</Text>
              <Text style={{ flex: 1, marginRight: 20 }}>{statInfo[3][6]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[3][7]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[3][8]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[3][9]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[3][10]}</Text>
            </View>
            
            
          </View>
        </ScrollView>
      </View>

      <Text style={{marginLeft:10,marginTop:20,fontWeight:'bold'}}>OutfieldPlayers(26)</Text>
      <View style={{flexDirection:"row",marginTop:10,marginLeft:10,marginRight:10,borderWidth:1,borderRadius:10,borderColor:'#ccc'}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:17,paddingLeft:19,  borderBottomWidth: 1,borderColor: "#ccc"}}>Name</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[4][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[5][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[6][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[7][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[8][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[9][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[10][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[11][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[12][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[13][0]}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[14][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[15][0]}</Text>
          </View><View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[16][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[17][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[18][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[19][0]}</Text>
          </View><View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[20][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[21][0]}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[22][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[23][0]}</Text>
          </View><View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[24][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[25][0]}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[26][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[27][0]}</Text>
          </View><View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{statInfo[28][0]}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{11}</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
          <View style={{flexDirection:"column",borderBottomWidth: 1,borderColor: "#ccc"}}>
            <Text style={{marginTop:17,borderBottomWidth: 1,borderColor: "#ccc"}}>   
              포지션        득점        도움        기회창출        슈팅        파울        경고        퇴장        패널티킥        유효        슈팅        경기수
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 17, marginLeft: 5 }}>
              <Text style={{ flex: 1,marginRight:5 }}>DF</Text>
              <Text style={{ flex: 1, marginRight: 15}}>{statInfo[4][2]}</Text>
              <Text style={{ flex: 1, marginRight: 15 }}>{statInfo[4][3]}</Text>
              <Text style={{ flex: 1, marginRight: 15 }}>{statInfo[4][4]}</Text>
              <Text style={{ flex: 1, marginRight: 15 }}>{statInfo[4][5]}</Text>
              <Text style={{ flex: 1, marginRight: 20 }}>{statInfo[4][6]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[4][7]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[4][8]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[4][9]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[4][10]}</Text>
              <Text style={{ flex: 1 }}>{statInfo[4][11]}</Text>
            </View>
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>


            <Text style={{marginTop:17,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:17,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:17,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>

            <Text style={{marginTop:17,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:17,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
          </View>
        </ScrollView>
      </View>
      
      
     


    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  cell: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: 60,
    fontSize:5,
    alignItems: "center",
    justifyContent: "center",
  },
  imageInput: {
    resizeMode: "contain",
    width: 60,
    height: 60
  },
});

export default PlayerInfo;


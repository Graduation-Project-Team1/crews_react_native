import React from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";

const PlayerInfo = (props) => {
  const { statInfo, getValueOrLoading} = props;

  return (
    <ScrollView>
      <Text style={{marginLeft:10,marginTop:20,fontWeight:'bold'}}>GK(2)</Text>
      <View style={{flexDirection:"row",marginTop:10,marginLeft:10,marginRight:10,borderWidth:1,borderRadius:10,borderColor:'#ccc'}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:17,paddingLeft:19,paddingRight:30, borderBottomWidth: 1,borderColor: "#ccc"}}>이름</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{getValueOrLoading(statInfo[2], 0)}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:17, marginLeft:15}}>{getValueOrLoading(statInfo[3], 0)}</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
          <View style={{flexDirection:"column",borderBottomWidth: 1,borderColor: "#ccc"}}>
            <Text style={{marginTop:17,borderBottomWidth: 1,borderColor: "#ccc"}}>   
              포지션       선방        실점        무실점경기      슈팅        파울        경고        퇴장     패널티킥   경기수
            </Text>
              {statInfo.slice(2, 4).map((row, index) => (
                <View key={index} style={{ flexDirection: 'row', marginTop: 17, marginLeft: 5 }}>
                  <Text style={{ flex: 1}}>GK</Text>
                  {row.slice(2, 11).map((value, idx) => (
                    <Text key={idx} style={{ flex: 1 }}>{value}</Text>
                  ))}
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
      
      <Text style={{marginLeft:10,marginTop:20,fontWeight:'bold'}}>DF(11)</Text>
      <View style={{flexDirection:"row",marginTop:10,marginLeft:10,marginRight:10,borderWidth:1,borderRadius:10,borderColor:'#ccc'}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:17,paddingLeft:19,paddingRight:30,  borderBottomWidth: 1,borderColor: "#ccc"}}>이름</Text>
          {statInfo.slice(4, 15).map((row, index) => (
            <View key={index} style={{flexDirection:'row'}}>
              <Text style={{marginTop:17, marginLeft:15}}>{getValueOrLoading(row, 0)}</Text>
            </View>
          ))}
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
          <View style={{flexDirection:"column", borderBottomWidth: 1, borderColor: "#ccc"}}>
            <Text style={{marginTop:17, borderBottomWidth: 1, borderColor: "#ccc"}}>   
              포지션        태클        가로채기        걷어내기        경고        퇴장        슈팅막음        볼경합        볼경합승리        공중볼경합        경기수
            </Text>
            {statInfo.slice(4, 15).map((row, index) => (
              <View key={index} style={{ flexDirection: 'row', marginTop: 17, marginLeft: 5 }}>
                <Text style={{ flex: 1 }}>
                  DF
                </Text>
                {row.slice(2, 12).map((value, idx) => (
                  <Text key={idx} style={{ flex: 1 }}>{value}</Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <Text style={{marginLeft:10,marginTop:20,fontWeight:'bold'}}>MF(8)</Text>
      <View style={{flexDirection:"row",marginTop:10,marginLeft:10,marginRight:10,borderWidth:1,borderRadius:10,borderColor:'#ccc'}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:17,paddingLeft:19,paddingRight:30,  borderBottomWidth: 1,borderColor: "#ccc"}}>이름</Text>
          {statInfo.slice(15, 23).map((row, index) => (
            <View key={index} style={{flexDirection:'row'}}>
              <Text style={{marginTop:17, marginLeft:15}}>{getValueOrLoading(row, 0)}</Text>
            </View>
          ))}
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
          <View style={{flexDirection:"column", borderBottomWidth: 1, borderColor: "#ccc"}}>
            <Text style={{marginTop:17, borderBottomWidth: 1, borderColor: "#ccc"}}>   
              포지션        득점        도움        경고        퇴장        패스        유효패스        유효크로스        가로채기        터치수        경기수
            </Text>
            {statInfo.slice(15, 23).map((row, index) => (
              <View key={index} style={{ flexDirection: 'row', marginTop: 17, marginLeft: 5 }}>
                <Text >
                  MF
                </Text>
                {row.slice(2, 12).map((value, idx) => (
                  <Text key={idx} style={{ flex: 1 }}>{value}</Text>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <Text style={{marginLeft:10,marginTop:20,fontWeight:'bold'}}>ATK(7)</Text>
      <View style={{flexDirection:"row",marginTop:10,marginLeft:10,marginRight:10,borderWidth:1,borderRadius:10,borderColor:'#ccc'}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:17,paddingLeft:19,paddingRight:30,  borderBottomWidth: 1,borderColor: "#ccc"}}>이름</Text>
          {statInfo.slice(23, 30).map((row, index) => (
            <View key={index} style={{flexDirection:'row'}}>
              <Text style={{marginTop:17, marginLeft:15}}>{getValueOrLoading(row, 0)}</Text>
            </View>
          ))}
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
          <View style={{flexDirection:"column", borderBottomWidth: 1, borderColor: "#ccc"}}>
            <Text style={{marginTop:17, borderBottomWidth: 1, borderColor: "#ccc"}}>   
              포지션        득점        도움        경고        퇴장        슈팅        유효슈팅        패널티킥        터치수        드리블성공        경기수
            </Text>
            {statInfo.slice(23, 30).map((row, index) => (
              <View key={index} style={{ flexDirection: 'row', marginTop: 17, marginLeft: 5 }}>
                <Text >
                  ATK
                </Text>
                {row.slice(2, 12).map((value, idx) => (
                  <Text key={idx} style={{ flex: 1 }}>{value}</Text>
                ))}
              </View>
            ))}
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


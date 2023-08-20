import React from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";

const PlayerInfo = (props) => {
  const { statInfo } = props;

  return (
    <ScrollView>
      <Text style={{marginLeft:10,marginTop:20,fontWeight:'bold'}}>GoalKeeper</Text>
      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:17,  borderBottomWidth: 1,borderColor: "#ccc"}}>                    Name    </Text>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/kim_jeong_hoon.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>김정훈</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/jeong_min_ki.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>정민기</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
          <View style={{flexDirection:"column",borderBottomWidth: 1,borderColor: "#ccc"}}>
            <Text style={{marginTop:17,borderBottomWidth: 1,borderColor: "#ccc"}}>   
              포지션        득점        도움        공격포인트        슈팅        파울        경고        퇴장        패널티킥        유효        슈팅        경기수
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              GK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              GK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
          </View>
        </ScrollView>
      </View>

      <Text style={{marginLeft:10,marginTop:20,fontWeight:'bold'}}>OutfieldPlayers</Text>
      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:17,  borderBottomWidth: 1,borderColor: "#ccc"}}>                    Name    </Text>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/kim_jin_su.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>김진수</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/jeong_woo_jae.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>정우재</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/park_jin_seob.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>박진섭</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/yun_young_sun.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>윤영선</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/ku_ja_ryong.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>구자룡</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/tomas_petrasek.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>페트라섹</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/jeong_tae_wook.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>정태욱</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/hong_jeong_ho.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>홍정호</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/choi_chul_soon.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>최철순</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/park_chang_woo.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>박창우</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/ahn_hyun_beom.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>안현범</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/lee_soo_bin.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>이수빈</Text>
          </View><View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/ryu_jae_moon.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>류재문</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/nana_boateng.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>보아텡</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/paik_seung_ho.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>백승호</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/maeng_seong_ung.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>맹성웅</Text>
          </View><View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/oh_jae_hyeok.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>오재혁</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/jun_amano.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>아마노</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/andre_luis.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>안드레 루이스</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/song_min_kyu.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>송민규</Text>
          </View><View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/moon_seon_min.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>문선민</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/han_kyo_won.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>한교원</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/lee_dong_jun.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>이동준</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/gustavo_sousa.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>구스타보</Text>
          </View><View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/bak_jae_yong.png')} />
            <Text style={{marginTop:17, marginLeft:15}}>박재용</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image style={styles.imageInput} source={require('../../../assets/analysis/playerPhoto/rafael_silva.png')}/>  
            <Text style={{marginTop:17, marginLeft:15}}>하파엘 실바</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.row}>
          <View style={{flexDirection:"column",borderBottomWidth: 1,borderColor: "#ccc"}}>
            <Text style={{marginTop:17,borderBottomWidth: 1,borderColor: "#ccc"}}>   
              포지션        득점        도움        공격포인트        슈팅        파울        경고        퇴장        패널티킥        유효        슈팅        경기수
            </Text>
            <Text style={{marginTop:17,marginLeft:5}}>   
              GK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              GK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:42,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:42,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:42,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:40,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              DF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>


            <Text style={{marginTop:42,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:42,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:40,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              MF                0              0               0                     0             0             0              0               0                0               0            0
            </Text>

            <Text style={{marginTop:42,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text> 
            <Text style={{marginTop:40,marginLeft:5}}>   
              ATK                0              0               0                     0             0             0              0               0                0               0            0
            </Text>
            <Text style={{marginTop:40,marginLeft:5}}>   
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



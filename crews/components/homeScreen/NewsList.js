import React from "react";
import { ScrollView, View } from "react-native";
import News from "./News";

const NewsList = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <News uri={'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F003%2F2023%2F03%2F05%2FNISI20230305_0001209325_web_20230305155220_20230305160303398.jpg&type=sc960_832'} title={"다시 앞서가는 전북"} writer={"연합뉴스 임채두"}/>
      <News uri={'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F003%2F2023%2F03%2F05%2FNISI20230305_0001209325_web_20230305155220_20230305160303398.jpg&type=sc960_832'} title={"다시 앞서가는 전북"} writer={"연합뉴스 임채두"}/>
      <News uri={'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F003%2F2023%2F03%2F05%2FNISI20230305_0001209325_web_20230305155220_20230305160303398.jpg&type=sc960_832'} title={"다시 앞서가는 전북"} writer={"연합뉴스 임채두"}/>
    </ScrollView>
  );
};

export default NewsList;

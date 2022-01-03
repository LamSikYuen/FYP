import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import { GoodsInfoCard } from "../components/goods-info.card";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color:skyblue;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`

padding: ${(props) => props.theme.space[3]};
`;

const GoodList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`

`;


export const GoodsScreen =() =>(

<SafeArea>
    <SearchContainer>
        <Searchbar />
        </SearchContainer>
        <GoodList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <GoodsInfoCard/>
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      
    />
        
          
  </SafeArea>



);

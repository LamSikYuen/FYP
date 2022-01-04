import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";





export const SafeArea = styled(SafeAreaView)`
  background-color: skyblue;
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
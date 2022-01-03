import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/infrastructure/theme";
import { GoodsScreen } from "./src/features/goods/screens/goods.screen";

import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

export default function App() {

  const [RobotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if(!RobotoLoaded || !OswaldLoaded){
    return null;
  }


  return (
    <>
    <ThemeProvider theme={theme}>
      <GoodsScreen />
    </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


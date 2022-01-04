import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/infrastructure/theme";
import { GoodsScreen } from "./src/features/goods/screens/goods.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Homepage: "home",
  ME: "md-people-sharp",
  Payee:"md-body",
  Settings: "md-settings",
};

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const HP = () => <SafeArea><Text>Home page</Text></SafeArea>
const ME = () => <SafeArea><Text>Me</Text></SafeArea>
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};



export default function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
    <NavigationContainer>
          <Tab.Navigator
          
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
          }}
          
          
          
          >
          <Tab.Screen name="Homepage" component={HP} />
            <Tab.Screen name="Payee" component={GoodsScreen} />
           
            <Tab.Screen name="ME" component={ME} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
    </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );

  }

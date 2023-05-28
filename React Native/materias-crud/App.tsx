import        React                        from "react";
import      { NavigationContainer }        from "@react-navigation/native";
import      { createNativeStackNavigator } from "@react-navigation/native-stack";
import        Home                         from "./components/Home/Home";
import        New                          from "./components/New/New";
import type { NativeStackScreenProps }     from "@react-navigation/native-stack";
import      { StatusBar }                  from "expo-status-bar";
import      { PaperProvider }              from "react-native-paper";

type StackParamList = {
  Home: undefined;
  New: undefined;
};

export type HomeProps = NativeStackScreenProps<StackParamList, "Home">;
export type NewProps = NativeStackScreenProps<StackParamList, "New">;

export default function App(): JSX.Element {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <PaperProvider theme={{ dark: false, version: 2 }}>
      <NavigationContainer>
        <StatusBar translucent={false} backgroundColor="#6200EE" style="light" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="New"
            component={New}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

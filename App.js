import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./screens/AllPlaces";


const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="addPlace" component={Home} />
          <Stack.Screen name="places" component={AllPlaces} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

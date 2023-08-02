// ---------Third-party components & modules---------
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ---------Custom components & modules---------
import { Welcome, Login } from "../screens";
// import InnerNavigation from "./InnerNavigation";

// Create navigation stack
const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "slide_from_right",
          unmountOnBlur: true,
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Register" component={Register} /> */}
        {/* <Stack.Screen name="InnerNav" component={InnerNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

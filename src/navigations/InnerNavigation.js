// ---------Third-party components & modules---------
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ---------Custom components & modules---------
import {
  FermentationResult,
  FermentationTime,
  WitheringResult,
} from "../screens";
import BottomNavigation from "./BottomNavigation";

// Create navigation stack
const Stack = createNativeStackNavigator();

export default function InnerNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "card",
        animationTypeForReplace: "push",
        animation: "slide_from_right",
        unmountOnBlur: true,
      }}
      initialRouteName="BottomTabs"
    >
      <Stack.Screen name="BottomTabs" component={BottomNavigation} />
      <Stack.Screen name="FermentationResult" component={FermentationResult} />
      <Stack.Screen name="FermentationTime" component={FermentationTime} />
      <Stack.Screen name="WitheringResult" component={WitheringResult} />
    </Stack.Navigator>
  );
}

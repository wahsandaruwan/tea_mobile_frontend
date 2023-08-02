// ---------Third-party components & modules---------
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// ---------Custom components & modules---------
import { Fermentation, Withering } from "../screens";
import { BottomMenuIcons } from "../utilities";

// ---------Constants---------
import { Colors } from "../constants";

// Create bottom navigator
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) =>
          BottomMenuIcons(route, focused),
        tabBarStyle: {
          height: 70,
          backgroundColor: Colors.primary,
        },
      })}
      initialRouteName="Withering"
    >
      <Tab.Screen name="Withering" component={Withering} />
      <Tab.Screen name="Fermentation" component={Fermentation} />
    </Tab.Navigator>
  );
}

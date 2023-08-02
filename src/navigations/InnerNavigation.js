// // ---------Third-party components & modules---------
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // ---------Custom components & modules---------
// import { Offer, SearchShops, SearchOffers, Shop, User, Help } from "../screens";
// import BottomNavigation from "./BottomNavigation";

// // Create navigation stack
// const Stack = createNativeStackNavigator();

// export default function InnerNavigation() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         presentation: "card",
//         animationTypeForReplace: "push",
//         animation: "slide_from_right",
//         unmountOnBlur: true,
//       }}
//       initialRouteName="BottomTabs"
//     >
//       <Stack.Screen name="BottomTabs" component={BottomNavigation} />
//       <Stack.Screen name="Offer" component={Offer} />
//       <Stack.Screen name="SearchShops" component={SearchShops} />
//       <Stack.Screen name="SearchOffers" component={SearchOffers} />
//       <Stack.Screen name="Shop" component={Shop} />
//       <Stack.Screen name="User" component={User} />
//       <Stack.Screen name="Help" component={Help} />
//     </Stack.Navigator>
//   );
// }

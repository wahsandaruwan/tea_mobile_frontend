// ---------Inbuilt components & modules---------
import { View } from "react-native";

// ---------Third-party components & modules---------
import * as SolidIcons from "react-native-heroicons/solid";
import * as OutIcons from "react-native-heroicons/outline";

// ---------Constants---------
import { Colors } from "../constants";

export default function BottomMenuIcons(route, focused) {
  let icon;
  if (route.name == "Withering") {
    icon = focused ? (
      <SolidIcons.HomeIcon size="30" color={Colors.light} />
    ) : (
      <OutIcons.HomeIcon size="30" strokeWidth={2} color={Colors.dark} />
    );
  } else if (route.name == "Fermentation") {
    icon = focused ? (
      <SolidIcons.ShoppingBagIcon size="30" color={Colors.light} />
    ) : (
      <OutIcons.ShoppingBagIcon size="30" strokeWidth={2} color={Colors.dark} />
    );
  }
  let btnCls = focused ? Colors.dark : "";
  return (
    <View
      style={{
        backgroundColor: btnCls,
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
      }}
    >
      {icon}
    </View>
  );
}

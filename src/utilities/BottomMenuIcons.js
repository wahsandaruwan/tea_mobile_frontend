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
      <SolidIcons.Squares2X2Icon size="30" color={Colors.light} />
    ) : (
      <OutIcons.Squares2X2Icon size="30" strokeWidth={2} color={Colors.dark} />
    );
  } else if (route.name == "Fermentation") {
    icon = focused ? (
      <SolidIcons.Square3Stack3DIcon size="30" color={Colors.light} />
    ) : (
      <OutIcons.Square3Stack3DIcon
        size="30"
        strokeWidth={2}
        color={Colors.dark}
      />
    );
  }
  let btnCls = focused ? Colors.dark : "";
  return (
    <View
      style={{
        backgroundColor: btnCls,
        alignItems: "center",
        borderRadius: 30,
        padding: 10,
      }}
    >
      {icon}
    </View>
  );
}

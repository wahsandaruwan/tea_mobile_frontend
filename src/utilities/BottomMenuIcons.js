// ---------Inbuilt components & modules---------
import { View, Image } from "react-native";

// ---------Third-party components & modules---------
import * as SolidIcons from "react-native-heroicons/solid";
import * as OutIcons from "react-native-heroicons/outline";

// ---------Constants---------
import { Colors, Images } from "../constants";

export default function BottomMenuIcons(route, focused) {
  let icon;
  if (route.name == "Withering") {
    icon = focused ? (
      <View style={{ width: 30, height: 30 }}>
        <Image
          source={Images.fermentation}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    ) : (
      <View style={{ width: 40, height: 40 }}>
        <Image
          source={Images.fermentation_s}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  } else if (route.name == "Fermentation") {
    icon = focused ? (
      <View style={{ width: 30, height: 30 }}>
        <Image
          source={Images.withering}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    ) : (
      <View style={{ width: 40, height: 40 }}>
        <Image
          source={Images.withering_s}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
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

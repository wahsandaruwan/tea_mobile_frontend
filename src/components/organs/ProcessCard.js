// ---------Inbuilt components & modules---------
import { Text, View, TouchableOpacity, Image } from "react-native";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

// ---------Constants---------
import { Colors, Images } from "../../constants";

export default function ProcessCard() {
  // Navigation
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: Colors.light,
        width: "100%",
        borderRadius: 10,
        padding: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Icons.SunIcon size="20" color={Colors.dark} /> */}
          <View style={{ width: 20, height: 20 }}>
            <Image
              source={Images.temp}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={{ fontSize: 12, color: Colors.dark, marginLeft: 3 }}>
            80
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Icons.CloudIcon size="20" color={Colors.dark} /> */}
          <View style={{ width: 20, height: 20 }}>
            <Image
              source={Images.humidity}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={{ fontSize: 12, color: Colors.dark, marginLeft: 3 }}>
            85
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Icons.BeakerIcon size="20" color={Colors.dark} /> */}
          <View style={{ width: 20, height: 20 }}>
            <Image
              source={Images.moisture}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={{ fontSize: 12, color: Colors.dark, marginLeft: 3 }}>
            30
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Icons.ArrowUpOnSquareIcon size="20" color={Colors.dark} /> */}
          <View style={{ width: 20, height: 20 }}>
            <Image
              source={Images.dhool}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={{ fontSize: 12, color: Colors.dark, marginLeft: 3 }}>
            2.5
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons.CalendarDaysIcon size="20" color={Colors.dark} />
          <Text style={{ fontSize: 12, color: Colors.dark, marginLeft: 3 }}>
            2023-08-03 - 10:20
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: Colors.dark,
              padding: 8,
              borderRadius: 50,
              marginRight: 5,
            }}
            onPress={() => navigation.navigate("FermentationTime")}
          >
            <Icons.ClockIcon size="15" color={Colors.light} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.dark,
              padding: 8,
              borderRadius: 50,
            }}
            onPress={() => navigation.navigate("FermentationResult")}
          >
            <Icons.RocketLaunchIcon size="15" color={Colors.light} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

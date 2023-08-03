// ---------Inbuilt components & modules---------
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";

// ---------Constants---------
import { Colors, Images } from "../constants";

export default function Withering({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: Colors.ternary,
      }}
    >
      <StatusBar style="dark" />
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <ImageBackground
          source={Images.back}
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "90%",
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-end",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: Colors.dark,
                padding: 10,
                borderRadius: 50,
                marginRight: 10,
              }}
              onPress={() => navigation.navigate("InnerNav")}
            >
              <Icons.PowerIcon size="20" color={Colors.light} />
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              style={{
                backgroundColor: Colors.orange,
                paddingVertical: 15,
                paddingHorizontal: 30,
                borderRadius: 30,
              }}
              onPress={() => navigation.navigate("WitheringResult")}
            >
              <Text
                style={{
                  color: Colors.dark,
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                Withering
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

// ---------Inbuilt components & modules---------
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// ---------Constants---------
import { Colors, Images } from "../constants";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.ternary }}>
      <StatusBar style="dark" />
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
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={Images.logo} style={{ width: 250, height: 100 }} />
          </View>
          <Text style={{ fontSize: 12, color: Colors.dark, marginBottom: 15 }}>
            Tea Withering and Fermentation Detection.
          </Text>
          <View>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 10,
                backgroundColor: Colors.orange,
              }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  color: Colors.dark,
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

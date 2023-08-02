// ---------Inbuilt components & modules---------
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// ---------Constants---------
import { Colors, Images } from "../constants";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.ternary }}>
      <StatusBar style="dark" />
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
            marginBottom: 10,
          }}
        >
          <Image source={Images.logo} style={{ width: 250, height: 100 }} />
        </View>
        <View>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 20,
              backgroundColor: Colors.dark,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                fontSize: 12,
                textAlign: "center",
                color: Colors.light,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

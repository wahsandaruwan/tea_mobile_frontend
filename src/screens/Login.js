// ---------Inbuilt components & modules---------
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";

// ---------Constants---------
import { Colors, Images } from "../constants";

export default function Login({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      style={{ display: "flex", backgroundColor: Colors.ternary }}
      showsVerticalScrollIndicator={false}
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
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Icons.UserGroupIcon size="45" color={Colors.secondary} />
            <Text
              style={{
                fontSize: 30,
                color: Colors.secondary,
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              Login
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
              paddingHorizontal: 30,
            }}
          >
            <TextInput
              placeholder="Enter Email Address"
              style={{
                width: "100%",
                borderRadius: 30,
                backgroundColor: Colors.light,
                color: Colors.dark,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginBottom: 10,
              }}
            />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              style={{
                width: "100%",
                borderRadius: 30,
                backgroundColor: Colors.light,
                color: Colors.dark,
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginBottom: 10,
              }}
            />
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: Colors.orange,
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 30,
              }}
              onPress={() => navigation.navigate("InnerNav")}
            >
              <Text
                style={{
                  color: Colors.dark,
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

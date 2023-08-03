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

export default function FermentationResult({ navigation }) {
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
            position: "relative",
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
              position: "absolute",
              top: "5%",
              right: 0,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: Colors.dark,
                padding: 10,
                borderRadius: 50,
                marginLeft: 10,
              }}
              onPress={() => navigation.goBack()}
            >
              <Icons.ArrowLeftIcon size="20" color={Colors.light} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 30,
              backgroundColor: Colors.orange,
              height: 200,
              width: 200,
              borderRadius: 100,
            }}
          >
            <Text
              style={{
                color: Colors.dark,
                fontSize: 22,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              100% Fermented
            </Text>
            <Text
              style={{
                color: Colors.dark,
                fontSize: 12,
                textAlign: "center",
              }}
            >
              based on particular variables.
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 30,
              backgroundColor: Colors.grey,
              height: 200,
              width: 200,
              borderRadius: 100,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: Colors.dark,
                fontSize: 22,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              100% Fermented
            </Text>
            <Text
              style={{
                color: Colors.dark,
                fontSize: 12,
                textAlign: "center",
              }}
            >
              based on the color of the sample.
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

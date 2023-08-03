// ---------Inbuilt components & modules---------
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// ---------Third-party components & modules---------
import * as Icons from "react-native-heroicons/solid";

// ---------Custom components & modules---------
import { ProcessCard } from "../components/organs";

// ---------Constants---------
import { Colors, Images } from "../constants";

export default function Fermentation({ navigation }) {
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
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
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
              <Icons.PlusIcon size="20" color={Colors.light} />
            </TouchableOpacity>

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
              justifyContent: "flex-start",
            }}
            style={{ width: "100%", padding: 10 }}
            showsVerticalScrollIndicator={false}
          >
            <ProcessCard />
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

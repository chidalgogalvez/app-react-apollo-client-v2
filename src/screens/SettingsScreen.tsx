import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";

const SettingsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Hello World !!!
          </Text>
        </View>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
          By Chidalgo
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default SettingsScreen;

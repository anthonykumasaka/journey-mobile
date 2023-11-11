import { View, Text, TouchableOpacity } from "react-native";

export const LandingPage = () => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Welcome to Journey
      </Text>
      <Text style={{ fontWeight: "bold" }}>An app to help you travel!</Text>
      <TouchableOpacity
        onPress={() => console.log("on press ipad")}
        style={{
          backgroundColor: "#000",
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white" }}>Visit</Text>
      </TouchableOpacity>
    </View>
  );
};

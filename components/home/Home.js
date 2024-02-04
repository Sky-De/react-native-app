import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import { COLORS, SIZES, icons, images } from "../../constants";
import { Stack, useRouter } from "expo-router";
import {
  NearbyJobCard,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../../components";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  function handleProfilePress() {
    navigation.navigate("Profile");
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Text>this is home page of my app</Text>
      <Button title="Go to Profile" onPress={handleProfilePress} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 35,
  },
});

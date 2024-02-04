import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, Text } from "react-native";
import { COLORS } from "../../constants";

const Profile = () => {
  const navigation = useNavigation();
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Text>this is your profile</Text>
      <Button title="Go to Home" onPress={handleHomePress} />
    </SafeAreaView>
  );
};

export default Profile;

import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import AppleCard from "../components/apple";

export default function Apple() {
  const apple = useLocalSearchParams();
  return (
    <View>
      <AppleCard />
    </View>
  );
}

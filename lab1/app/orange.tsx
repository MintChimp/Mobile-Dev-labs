// /app/orange.tsx
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import OrangeCard from "../components/orange";

export default function Orange() {
  const orange = useLocalSearchParams();
  return (
    <View>
      <OrangeCard />
    </View>
  );
}

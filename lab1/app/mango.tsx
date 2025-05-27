// /app/orange.tsx
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MangoCard from "../components/mango";

export default function Mango() {
  const orange = useLocalSearchParams();
  return (
    <View>
      <MangoCard />
    </View>
  );
}

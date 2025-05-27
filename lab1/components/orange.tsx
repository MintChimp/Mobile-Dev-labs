import { useLocalSearchParams } from "expo-router";
import { Text, View, Image } from "react-native";
import Button from "./button";

export default function OrangeCard() {
  const imageUrl = "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg";

  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 200, height: 200 }}
        resizeMode="cover"
      />
    <Button link={"/"} text={"home"} />
    </View>
  );
}

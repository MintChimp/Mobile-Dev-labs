import { useLocalSearchParams } from "expo-router";
import { Text, View, Image } from "react-native";
import Button from "./button";

export default function MangoCard() {
  const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/7/74/Mangos_-_single_and_halved.jpg";

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

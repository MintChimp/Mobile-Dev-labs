import { useLocalSearchParams } from "expo-router";
import { Text, View, Image } from "react-native";
import Button from "./button";

export default function AppleCard() {
  const imageUrl = "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg";

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

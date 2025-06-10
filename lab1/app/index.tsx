import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ExpoRouter from 'expo-router'
import Fruits from '../components/fruits';
import Button from '../components/button';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>
            Welcome to my App
        </Text>
      <Pressable>
        <Text onPress={() => alert("Lab 2 Done")}>
          Press Me!
        </Text>
        <Fruits/>
      </Pressable>
      <Button link={"/lab3"} text={"Lab3"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

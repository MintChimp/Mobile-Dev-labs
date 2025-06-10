import { View } from "react-native";
import { Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from "react";
import Increment from "../components/increment";
import Decrement from "../components/decrement";
import Button from "../components/button";


export default function Lab3() {
    const [count, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text>Count: {count}</Text>
            <Increment count={count} setCounter={setCounter} />
            <Decrement count={count} setCounter={setCounter} />
            <Button link={"/"} text={"home"} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
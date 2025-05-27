import React from "react";
import { View, Text } from "react-native";
import Button from "./button";

interface Fruit {
  name: string;
}

const fruitList: Fruit[] = [
  { name: "apple" },
  { name: "orange" },
  { name: "mango" },
];

export default function Fruits() {
  return (
    <View>
      {fruitList.map((fruit, index) => (
        <Button key={index} link={`/${fruit.name}`} text={fruit.name} />
      ))}
    </View>
  );
};
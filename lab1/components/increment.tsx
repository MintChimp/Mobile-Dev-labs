import { Pressable, StyleSheet, Text, View } from 'react-native';

type IncrementProps = {
    count: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export default function Increment({ count, setCounter }: IncrementProps) {
    const increment = () => setCounter(prev => prev + 1);

    return (
        <View>
            <Pressable onPress={increment}>
                <Text>Increment</Text>
            </Pressable>
        </View>
    );
}

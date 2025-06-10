import { Pressable, StyleSheet, Text, View } from 'react-native';

type DecrementProps = {
    count: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export default function Decrement({ count, setCounter }: DecrementProps) {
    const Decrement = () => setCounter(prev => prev - 1);

    return (
        <View>
            <Pressable onPress={Decrement}>
                <Text>Decrement</Text>
            </Pressable>
        </View>
    );
}

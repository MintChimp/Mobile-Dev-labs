import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
interface GroupMember {
  name: string;
  github_repo: string;
  group_no: string;
}

const groupMembers: GroupMember[] = [
  { name: "Lochlan Piercey", github_repo: "Mobile-Dev-labs", group_no: "8" },
  { name: "Murdoch Piercey", github_repo: "Mobile-Dev-labs", group_no: "8" },
  { name: "Cody Lowe", github_repo: "Mobile-Dev-labs", group_no: "8" },
];

  return (
    <View style={styles.container}>
      <View>
        {groupMembers.map((member, index) => (
          <Text key={index}>
            Name: {member.name}, GitHub: {member.github_repo}, Group: {member.group_no}
          </Text>
        ))}
      </View>
      <Pressable>
        <Text onPress={() => alert("Lab 1 Done")}>
          Press Me!
        </Text>
      </Pressable>
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

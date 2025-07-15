import React from 'react';
import { SafeAreaView } from 'react-native';
import UserList from './userList';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserList />
    </SafeAreaView>
  );
}

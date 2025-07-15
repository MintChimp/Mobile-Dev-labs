import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from './lib/supabase_crud';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newName, setNewName] = useState('');
  const [editedNames, setEditedNames] = useState<{ [id: number]: string }>({});

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
      const nameMap: { [id: number]: string } = {};
      data.forEach((user: any) => {
        nameMap[user.id] = user.name;
      });
      setEditedNames(nameMap);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    if (!newName.trim()) return;
    try {
      await addUser({ name: newName });
      setNewName('');
      await fetchUsers();
    } catch (err) {
      console.error('Add error:', err);
    }
  };

const handleUpdateUser = async (id: number) => {
  try {
    const name = editedNames[id];
    await updateUser(id, { name });

    const data = await getUsers();
    setUsers(data);

    const nameMap: { [id: number]: string } = {};
    data.forEach((user: any) => {
      nameMap[user.id] = user.name;
    });
    setEditedNames(nameMap);
  } catch (err) {
    console.error('Update error:', err);
  }
};


  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id);
      await fetchUsers();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleNameChange = (id: number, newValue: string) => {
    setEditedNames((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text>Loading users...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Add User Section */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter name"
          value={newName}
          onChangeText={setNewName}
          style={styles.input}
        />
        <Button title="Add User" onPress={handleAddUser} />
      </View>

      {/* List of Users */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id?.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.label}>ID: {item.id}</Text>
            <TextInput
              style={styles.input}
              value={editedNames[item.id]}
              onChangeText={(text) => handleNameChange(item.id, text)}
            />
            <View style={styles.buttonRow}>
              <Button title="Save" onPress={() => handleUpdateUser(item.id)} />
              <Button title="Delete" onPress={() => handleDeleteUser(item.id)} color="red" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    padding: 20,
    textAlign: 'center',
  },
  list: {
    padding: 10,
  },
  card: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    height: 40,
    borderRadius: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default UserList;

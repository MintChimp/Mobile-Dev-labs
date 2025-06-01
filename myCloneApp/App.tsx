import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const handlePress = () => {
    Alert.alert('Assignment 1 Completed');
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Group Profile</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
          <View style={styles.profileStats}>
            <Text style={styles.statNumber}>53</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.profileStats}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          <View style={styles.profileStats}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Admins</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.description}>
          <Text style={styles.groupName}>OOTD Everyday</Text>
          <Text>Fit check! 🧍🏽‍♂️</Text>
          <Text>You know we’ll hype you up.</Text>
        </View>

        {/* Member Dropdown (Clickable) */}
        <TouchableOpacity style={styles.dropdown} onPress={handlePress}>
          <Text style={styles.dropdownText}>Member ▼</Text>
        </TouchableOpacity>

        {/* Grid of Posts */}
        <View style={styles.grid}>
          {Array.from({ length: 9 }).map((_, i) => (
            <Image
              key={i}
              source={{ uri: `https://picsum.photos/seed/${i + 1}/200/200` }}
              style={styles.gridImage}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        {['Home', 'Search', 'Add', 'Reels', 'Profile'].map((label, i) => (
          <TouchableOpacity key={i} style={styles.navItem}>
            <Text style={styles.navText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: 40,
    paddingBottom: 80, // leave space for navbar
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileStats: {
    alignItems: 'center',
    marginRight: 20,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    color: '#666',
  },
  description: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  groupName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dropdown: {
    alignSelf: 'center',
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  dropdownText: {
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 1,
    justifyContent: 'space-between',
  },
  gridImage: {
    width: '32.5%',
    aspectRatio: 1,
    marginBottom: 3,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fafafa',
    paddingVertical: 12,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
});

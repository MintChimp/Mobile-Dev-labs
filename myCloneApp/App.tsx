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
        {/* Header with Back, Title, Add, and Handle */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={handlePress}>
              <Image
                source={require('./assets/back_icon.png')}
                style={styles.headerIcon}
              />
            </TouchableOpacity>

            <Text style={styles.headerText}>Group Profile</Text>

            <TouchableOpacity onPress={handlePress}>
              <Image
                source={require('./assets/add_icon.png')}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.handleText}>ootd_everyday</Text>
        </View>

        {/* Profile Picture + Stats */}
        <View style={styles.profileSection}>
          <Image
            source={require('./assets/generic_photo.jpg')}
            style={styles.profileImage}
          />
          <View style={styles.statsWrapper}>
            <View style={styles.profileStats}>
              <Text style={styles.statNumber}>53</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.profileStats}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.profileStats}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.description}>
          <Text style={styles.groupName}>OOTD Everyday</Text>
          <Text>Fit check! 🧍🏽‍♂️</Text>
          <Text>You know we’ll hype you up.</Text>
        </View>

        {/* Follow / Message / Email Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.dropdown, styles.followButton]}
            onPress={handlePress}
          >
            <Text style={[styles.dropdownText, styles.followText]}>Follow</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdown} onPress={handlePress}>
            <Text style={styles.dropdownText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdown} onPress={handlePress}>
            <Text style={styles.dropdownText}>Email</Text>
          </TouchableOpacity>
        </View>

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
        {['🏠', '🔍', '➕', '🎬', '👤'].map((label, i) => (
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
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    paddingBottom: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    height: 50,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  handleText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 2,
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
  statsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  dropdown: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    width: 100,
    borderRadius: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownText: {
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    width: '100%',
  },
  followButton: {
    backgroundColor: '#007AFF',
  },
  followText: {
    color: '#fff',
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

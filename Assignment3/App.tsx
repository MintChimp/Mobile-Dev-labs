// DateFact.tsx
import React, { useEffect, useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

const API_KEY = 'bedb53d3c8msh5de26c74b0a192ap111f0cjsn81b2aee88e7c';
const API_HOST = 'numbersapi.p.rapidapi.com';

const DateFact: React.FC = () => {
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const m = parseInt(month, 10);
  const d = parseInt(day, 10);

  if (isNaN(m) || isNaN(d)) {
    setError(null);
    setFact(null);
    return;
  }

  // Check valid ranges
  if (m < 1 || m > 12 || d < 1 || d > 31) {
    setError('Invalid date');
    setFact(null);
    return;
  }

  // Check real date validity
  const testDate = new Date(2000, m - 1, d); // use leap year to allow Feb 29
  if (testDate.getMonth() + 1 !== m || testDate.getDate() !== d) {
    setError('Invalid date');
    setFact(null);
    return;
  }

  setError(null); // clear previous errors
  setLoading(true);

  axios
    .get(`https://${API_HOST}/${m}/${d}/date`, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
      params: {
        fragment: 'true',
        json: 'true',
      },
    })
    .then((response) => {
      const { text, year } = response.data;
      setFact(`${text} (${year})`);
    })
    .catch((err) => {
      console.error(err);
      setFact('Failed to fetch fact.');
    })
    .finally(() => {
      setLoading(false);
    });
}, [month, day]);

return (
  <SafeAreaView style={styles.safeArea}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>Enter a Date</Text>

      <TextInput
        style={styles.input}
        placeholder="Month (1–12)"
        keyboardType="number-pad"
        value={month}
        onChangeText={setMonth}
        maxLength={2}
      />

      <TextInput
        style={styles.input}
        placeholder="Day (1–31)"
        keyboardType="number-pad"
        value={day}
        onChangeText={setDay}
        maxLength={2}
      />

      {error ? (
      <Text style={styles.error}>{error}</Text>
      ) : loading ? (
      <ActivityIndicator size="large" color="#fff" />
      ) : (
      fact && <Text style={styles.fact}>{fact}</Text>
      )}
    </KeyboardAvoidingView>
  </SafeAreaView>
);
};

export default DateFact;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#121212',
    justifyContent: 'center', // Vertically center
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  fact: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  error: {
  color: '#ff4d4d',
  fontSize: 16,
  marginTop: 10,
  textAlign: 'center',
  },
});


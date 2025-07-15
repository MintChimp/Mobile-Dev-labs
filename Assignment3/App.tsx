// DateFact.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, ActivityIndicator, Keyboard, ScrollView, TouchableWithoutFeedback, } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';


const API_KEY = 'bedb53d3c8msh5de26c74b0a192ap111f0cjsn81b2aee88e7c';
const API_HOST = 'numbersapi.p.rapidapi.com';

type Props = {
  children: ReactNode;
};

const DismissKeyboardView: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{ flex: 1 }}>{children}</View>
  </TouchableWithoutFeedback>
);

const DateFact: React.FC = () => {
  const [month, setMonth] = useState<string>('0');
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
    <DismissKeyboardView>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.container}
        >
          <Text style={styles.title}>Enter a Date</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={month}
              onValueChange={(itemValue) => setMonth(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Month" value="0" />
              <Picker.Item label="January" value="1" />
              <Picker.Item label="February" value="2" />
              <Picker.Item label="March" value="3" />
              <Picker.Item label="April" value="4" />
              <Picker.Item label="May" value="5" />
              <Picker.Item label="June" value="6" />
              <Picker.Item label="July" value="7" />
              <Picker.Item label="August" value="8" />
              <Picker.Item label="September" value="9" />
              <Picker.Item label="October" value="10" />
              <Picker.Item label="November" value="11" />
              <Picker.Item label="December" value="12" />
            </Picker>
          </View>
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
      </ScrollView>
    </DismissKeyboardView>
  </SafeAreaView>
);
};

export default DateFact;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 24,
    textAlign: 'center'
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 16
  },
  picker: {
    flex: 1,
    color: '#FFFFFF',
    backgroundColor: 'lightgray'
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#121212',
    color: '#FFFFFF',
    borderColor: '#333333',
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16
  },
  fact: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
    textAlign: 'center'
  },
  error: {
    color: '#FF6B6B',
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center'
  },
});

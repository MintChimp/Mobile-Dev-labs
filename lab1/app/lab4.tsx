import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import vacationDestinations, {VacationDestination} from '../lib/vacationsDestinations';
import Button from '../components/button';

interface WikiSummary {
  extract: string;
  thumbnail?: { source: string };
}

export default function Lab4() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [wikiData, setWikiData] = useState<Record<number, WikiSummary | null>>({});
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handlePress = async (destination: VacationDestination) => {
    if (openId === destination.id) {
      setOpenId(null);
      return;
    }

    setOpenId(destination.id);

    if (!wikiData[destination.id]) {
      setLoadingId(destination.id);
      try {
        const cityName = encodeURIComponent(destination.location);
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${cityName}`);
        const data = await response.json();
        setWikiData((prev) => ({ ...prev, [destination.id]: data }));
      } catch (e) {
        setWikiData((prev) => ({ ...prev, [destination.id]: null }));
      } finally {
        setLoadingId(null);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button link={"/"} text={"home"}/>
      {vacationDestinations.map((dest) => (
        <View key={dest.id} style={styles.card}>
          <TouchableOpacity onPress={() => handlePress(dest)}>
            <Text style={styles.title}>{dest.location}</Text>
          </TouchableOpacity>
          {openId === dest.id && (
            <View style={styles.details}>
              <Text>Price: ${dest.price}</Text>
              <Text>Avg Temp: {dest.average_yearly_temperature}</Text>
              {loadingId === dest.id && <ActivityIndicator size="small" />}
              {!loadingId && wikiData[dest.id] && (
                <>
                  <Text style={styles.description}>{wikiData[dest.id]!.extract}</Text>
                  {wikiData[dest.id]!.thumbnail?.source && (
                    <Image
                      source={{ uri: wikiData[dest.id]!.thumbnail?.source }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  )}
                </>
              )}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 8
  },
  card: {
    backgroundColor: '#f2f2f2',
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  details: {
    marginTop: 8,
  },
  description: {
    marginTop: 8,
    fontStyle: 'italic',
  },
  image: {
    marginTop: 8,
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});

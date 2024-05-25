import * as Location from 'expo-location';
import { Link } from 'expo-router';
import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

interface Listing {
  paymentMethod: string;
  merchantId: string;
  name: string;
  address1: string;
  latitude?: number;
  longitude?: number;
  territory?: string;
  city?: string;
  country: string;
  source: string;
  sourceId: string;
  type: string;
  redeemType: string;
  medium_url: string;
  distance?: number;
}

interface Props {
  listings: Listing[];
  refresh: number;
  category: string;
  location: Location.LocationObject | undefined;
}

const screenWidth = Dimensions.get('window').width;

const Listings = memo(({ listings, refresh, category, location }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const refreshListings = useCallback(() => {
    // Implement the logic for refreshing the listings if necessary
  }, []);

  useEffect(() => {
    if (refresh) {
      refreshListings();
    }
  }, [refresh, refreshListings]);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [category]);

  const renderListingItem = useCallback(
    ({ item, index }: { item: Listing; index: number }) => (
      <Link href={`/listing/${item.merchantId}`} asChild key={index}>
       <TouchableOpacity>
          <Animated.View
            entering={FadeInRight}
            exiting={FadeOutLeft}
            style={styles.listing}>
            <Image source={{ uri: item.medium_url }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.details}>{item.distance}mi • 2 min</Text>
          </Animated.View>
        </TouchableOpacity>
      </Link>
    ),
    []
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}>
          {listings.map((item: Listing, index: number) =>
            renderListingItem({ item, index })
          )}
        </ScrollView>
      )}
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    width: screenWidth
  },
  scrollViewContainer: {
    paddingHorizontal: 16
  },
  listing: {
    width: 138,
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: '#0F172A',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 138,
    borderRadius: 10
  },
  title: {
    fontSize: 13,
    fontFamily: 'mon-sb',
    color: 'white',
    padding: 8
  },
  details: {
    fontSize: 11,
    fontFamily: 'mon',
    color: 'white',
    paddingBottom: 8,
    paddingHorizontal: 8
  },
  loading: {
    color: 'white',
    textAlign: 'center'
  }
});

export default Listings;


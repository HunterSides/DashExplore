import * as Location from "expo-location";
import { Link } from "expo-router";
import React, { memo, useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

interface Listing {
  image: string;
  name: string;
  distance: number;
}

interface Props {
  listings: Listing[];
  refresh?: number;
  category?: string;
  location?: Location.LocationObject;
}

const screenWidth = Dimensions.get("window").width;

const Listings = memo(({ listings, refresh, category, location }: Props) => {
  const [loading, setLoading] = useState(false);
  const [listingsData, setListings] = useState<Listing[]>(listings);

  const refreshListings = useCallback(() => {
    setListings([...listings]);
    console.log("refreshingListingsCalled...");
    console.log(`listings ${listings.length}`);
    console.log(`refresh: ${refresh}`);
    console.log(`category: ${category}`);
    if (location) {
      console.log(
        `location: ${location.coords.latitude}, ${location.coords.longitude}`
      );
    } else {
      console.log("location: undefined");
    }
  }, [listings, refresh, category, location]);

  useEffect(() => {
    setLoading(true);
    refreshListings();
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [category, refreshListings]);

  const renderListingItem = useCallback(
    ({ item, index }: { item: Listing; index: number }) => (
      <Link href={`/(modals)/merchant/listing/[id]`} asChild key={index}>
        <TouchableOpacity>
          <Animated.View
            entering={FadeInRight}
            exiting={FadeOutLeft}
            style={styles.listing}>
            <Image source={{ uri: item.image }} style={styles.image} />
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
          {listingsData.map((item, index) =>
            renderListingItem({ item, index })
          )}
        </ScrollView>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
  },
  scrollViewContainer: {
    paddingHorizontal: 16,
  },
  listing: {
    width: 138,
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: "#0F172A",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 138,
    borderRadius: 10,
  },
  title: {
    fontSize: 13,
    fontFamily: "mon-sb",
    color: "white",
    padding: 8,
  },
  details: {
    fontSize: 11,
    fontFamily: "mon",
    color: "white",
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  loading: {
    color: "white",
    textAlign: "center",
  },
});

export default Listings;

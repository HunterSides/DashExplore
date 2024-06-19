import { CATEGORIES } from "@/assets/data/categories";
// import listings from '@/assets/data/list.json';
import { merchants as listings } from "@/assets/data/categories";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import Colors from "@/constants/Colors";
import useLocation from "@/hooks/useLocation";

import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const Page = () => {
  const items = useMemo(() => listings as any, []);
  const [category, setCategory] = useState<string>(
    CATEGORIES.PRIMARY.Restaurants
  );
  const [refresh, setRefresh] = useState<number>(0);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  const { location } = useLocation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        marginTop: 120,
        paddingTop: 40,
      }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={{
          paddingLeft: 20,
        }}>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              paddingBottom: 17,
            }}>
            Local Favorites
          </Text>
          <Listings
            location={location}
            listings={items.slice(0, 5)}
            refresh={refresh}
            category={category}
          />
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              paddingBottom: 17,
            }}>
            Popular Online
          </Text>
          <Listings
            location={location}
            listings={items.slice(5, 10)}
            refresh={refresh}
            category={category}
          />
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
              paddingBottom: 17,
            }}>
            Best Discounts
          </Text>
          <Listings
            location={location}
            listings={items.slice(10, 14)}
            refresh={refresh}
            category={category}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Page;

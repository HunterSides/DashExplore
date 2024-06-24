import { CATEGORIES } from "@/assets/data/categories";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import Colors from "@/constants/Colors";
import useMerchants from "@/hooks/use-merchants";
import useLocation from "@/hooks/useLocation";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const ListingsPage = () => {
  const { merchants: items, isLoading, error } = useMerchants();
  const { location } = useLocation();

  const [category, setCategory] = useState<string>(
    CATEGORIES.PRIMARY.Restaurants
  );
  const [refresh] = useState<number>(1);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };

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
            isLoading={isLoading}
            error={error}
            location={location}
            listings={items.slice(0, 5)}
            refresh={isLoading ? 0 : refresh}
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

export default ListingsPage;

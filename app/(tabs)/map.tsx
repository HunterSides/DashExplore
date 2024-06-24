import { CATEGORIES } from "@/assets/data/categories";
import listingsDataGeo from "@/assets/data/merchants.geo.json";

import Listings from "@/components/Listings";
import ListingsMap from "@/components/ListingsMap";
import useMerchants from "@/hooks/use-merchants";
import useLocation from "@/hooks/useLocation";
import BottomSheet from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import React, { useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import ListingsPage from ".";

const Page = () => {
  const { merchants, isLoading, error } = useMerchants();
  const listings = useMemo(() => merchants as any, []);
  const geoItems = useMemo(() => listingsDataGeo as any, []);
  const [refresh, setRefresh] = useState<number>(0);
  const { location } = useLocation();

  const [category, setCategory] = useState<string>(
    CATEGORIES.PRIMARY.Restaurants
  );

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["10%", "70%", "90%"], []);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen />
      <ListingsMap listings={geoItems} />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleStyle={{
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        handleIndicatorStyle={{
          backgroundColor: "#334155",
          width: "20%",
          height: 6,
        }}
        backgroundStyle={{
          backgroundColor: "#0F172A",
        }}
        style={styles.sheetContainer}>
         <ListingsPage />
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },

  sheetContainer: {
    backgroundColor: "#0F172A",
    borderTopLeftRadius: 16, //both handlestyle and sheetcontainer have border radius and must be set to the same value
    borderTopRightRadius: 16,
    borderColor: "#334155",
    opacity: 0.1,
    // elevation: 4,
    // shadowColor: "#000",
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
  },
});
export default Page;

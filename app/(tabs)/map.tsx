import listingsDataGeo from '@/assets/data/merchants.geo.json';
import listingsData from '@/assets/data/list.json';
import ListingsBottomSheet from '@/components/ListingsBottomSheet';
import ListingsMap from '@/components/ListingsMap';
import useLocation from '@/hooks/useLocation';
import { Stack } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo as any, []);

  const [category, setCategory] = useState<string>('Tiny homes');
  const location = useLocation();
  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen />

      <ListingsMap listings={geoItems} />
      <ListingsBottomSheet
        listings={items}
        category={category}
        location={location}
      />
    </View>
  );
};

export default Page;

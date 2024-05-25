import Listings from '@/components/Listings';
import BottomSheet from '@gorhom/bottom-sheet';
import React from 'react';
import { useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  listings: any[];
  category: string;
  location: any;
}

// Bottom sheet that wraps our Listings component
const ListingsBottomSheet = ({ listings, category, location }: Props) => {
  const snapPoints = useMemo(() => ['10%', '70%', '90%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [refresh, setRefresh] = useState<number>(0);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleStyle={{
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
      }}
      handleIndicatorStyle={{
        backgroundColor: '#334155',
        width: '20%',
        height: 6
      }}
      backgroundStyle={{
        backgroundColor: '#0F172A'
      }}
      style={styles.sheetContainer}>
      <View style={styles.contentContainer}>
        <Listings
          location={location}
          listings={listings}
          refresh={refresh}
          category={category}
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  },

  sheetContainer: {
    backgroundColor: '#0F172A',
    borderTopLeftRadius: 16, //both handlestyle and sheetcontainer have border radius and must be set to the same value
    borderTopRightRadius: 16,
    borderColor: '#334155',
    opacity: 0.1
    // elevation: 4,
    // shadowColor: "#000",
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
  }
});

export default ListingsBottomSheet;

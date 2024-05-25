import Colors from '@/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import React from 'react';

import { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const categories = [
  {
    name: 'Food & Drink',
    icon: 'silverware-fork-knife'
  },
  {
    name: 'Stores',
    icon: 'shopping-outline'
  },

  {
    name: 'Entertainment',
    icon: 'drama-masks'
  }
];

interface Props {
  onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={'/(modals)/search'} asChild>
            <TouchableOpacity>
              <View style={styles.searchBtn}>
                <Ionicons name="search" size={24} color="#94A3B8" />
                <View>
                  <Text style={{ fontFamily: 'mon-sb', color: '#94A3B8' }}>
                    Search
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <ScrollView
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 8,
            paddingHorizontal: 20
          }}>
          {categories.map((item, index) => (
            <TouchableOpacity
              ref={(el) => (itemsRef.current[index] = el)}
              key={index}
              style={
                activeIndex === index
                  ? styles.categoriesBtnActive
                  : styles.categoriesBtn
              }
              onPress={() => selectCategory(index)}>
              <MaterialCommunityIcons
                name={item.icon as any}
                size={20}
                color={activeIndex === index ? Colors.primary : 'white'}
              />
              <Text
                style={
                  activeIndex === index
                    ? styles.categoryTextActive
                    : styles.categoryText
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#0F172A',

    height: 130,
    elevation: 2,

    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10
    }
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20
  },

  searchBtn: {
    borderRadius: 8,
    backgroundColor: '#1E293B',
    flexDirection: 'row',
    gap: 10,

    alignItems: 'center',
    minWidth: '100%',

    paddingVertical: 15,
    paddingHorizontal: 14,
    elevation: 2
  },

  categoryText: {
    fontSize: 12,
    fontFamily: 'mon-sb',
    color: 'white',
    paddingLeft: 7
  },
  categoryTextActive: {
    fontSize: 12,
    fontFamily: 'mon-sb',
    color: Colors.primary,
    paddingLeft: 7
  },
  categoriesBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 21,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#1E293B'
  },
  categoriesBtnActive: {
    flex: 1,
    paddingHorizontal: 21,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default ExploreHeader;

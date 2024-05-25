import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarBackground: () => (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 120
            }}>
            <LinearGradient
              // Background Linear Gradient
              colors={[
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0.61)',
                'rgba(0, 0, 0, 0.9)'
              ]}
              style={styles.background}
            />
          </View>
        )
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ size, color }) => (
            <Feather size={size} color={color} name="map" />
          )
        }}
      />

    </Tabs>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 120
  }
});
export default Layout;

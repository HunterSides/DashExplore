import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { TopLevel } from '@/types/geo-type';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import React, { memo, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useQuery } from '@tanstack/react-query';

interface Props {
  listings: any;
}

interface Merchants {
  merchants: TopLevel;
}

const INITIAL_REGION = {
  latitude: 49.246292,
  longitude: -123.116226,
  latitudeDelta: 9,
  longitudeDelta: 9
};

const ListingsMap = memo(({ listings }: Props) => {
  const router = useRouter();
  const mapRef = useRef<any>(null);
  const [clusters, setClusters] = useState([]);

  // When the component mounts, locate the user
  useEffect(() => {
    onLocateMe();
  }, []);

  // Fetch clustered data whenever the region changes
  useEffect(() => {
    fetchClusteredData(INITIAL_REGION);
  }, []);

  const fetchClusteredData = async (region: any) => {
    const { west, south, east, north } = getBoundingBox(region);
    const zoom = calculateZoomLevel(region);

    const { data } = await useQuery({
      queryKey: ["listings"],
      queryFn: async () => {
          const response = await fetch(`http://192.168.1.249:3001/merchant?file_name=source&west=${west}&south=${south}&east=${east}&north=${north}&zoom=${zoom}`, {
              method: 'GET',
          });
          return response.json();
      }
    });

    setClusters(data);
};

  const getBoundingBox = (region: any) => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = region;

    const west = longitude - longitudeDelta / 2;
    const south = latitude - latitudeDelta / 2;
    const east = longitude + longitudeDelta / 2;
    const north = latitude + latitudeDelta / 2;

    return { west, south, east, north };
  };

  const calculateZoomLevel = (region: any) => {
    const { latitudeDelta } = region;
    const zoomLevel = Math.round(Math.log(360 / latitudeDelta) / Math.LN2);
    return zoomLevel;
  };

  // When a marker is selected, navigate to the listing page
  const onMarkerSelected = (event: any) => {
    router.push(`/listing/${event.properties.sourceId}`);
  };

  // Focus the map on the user's location
  const onLocateMe = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 2, // to lock the zoom level to a city level, change this value to 0.0922
      longitudeDelta: 2
    };

    mapRef.current?.animateToRegion(region);
    fetchClusteredData(region); // Fetch clustered data for the user's location
  };

  const onRegionChangeComplete = (region: any) => {
    fetchClusteredData(region);
  };

  // Overwrite the renderCluster function to customize the cluster markers
  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;

    const points = properties.point_count; // used to determine the size of the cluster. To optimize performance, this value should be pre-calculated and stored in the data source.
    const aggregate_points = points > 99 ? '99+' : points; //to optimize this further, you should use a custom marker component that can handle the different sizes of the cluster like so:

    return (
      <Marker
        key={`cluster-${id}`}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1]
        }}
        onPress={onPress}
        style={{
          width: 30,
          height: 30
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text style={{ color: '#000', fontFamily: 'mon-sb' }}>
            {aggregate_points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        ref={mapRef}
        animationEnabled={true}
        style={StyleSheet.absoluteFillObject}
        initialRegion={INITIAL_REGION}
        provider={PROVIDER_GOOGLE}
        clusterColor="#fff"
        clusterTextColor="#000"
        clusterFontFamily="mon-sb"
        radius={40}
        renderCluster={renderCluster}
        showsUserLocation={true}
        onRegionChangeComplete={onRegionChangeComplete}>
        {clusters.map((cluster: any, index: number) => (
          <Marker
            coordinate={{
              latitude: cluster.geometry.coordinates[1],
              longitude: cluster.geometry.coordinates[0]
            }}
            key={index}
            onPress={() => onMarkerSelected(cluster)}>
            <View style={styles.marker}>
              <Text style={styles.markerText}>
                {cluster.properties.cluster
                  ? `Cluster of ${cluster.properties.point_count} points`
                  : cluster.properties.name}
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>
      <TouchableOpacity style={styles.locateBtn} onPress={onLocateMe}>
        <Ionicons name="navigate" size={24} color={Colors.dark} />
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  marker: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10
    }
  },
  markerText: {
    fontSize: 14,
    fontFamily: 'mon-sb'
  },
  locateBtn: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10
    }
  }
});

export default ListingsMap;
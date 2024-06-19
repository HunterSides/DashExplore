import { merchants } from "@/assets/data/categories";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  SlideInDown,
  useAnimatedRef,
  useScrollViewOffset,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const DetailsPage = () => {
  //const { id } = useLocalSearchParams();
  //const listing = merchants.find((item) => item.id.toString() === id);
  const listing = merchants.find((item) => item.name === ("BestBuy" as any));
  const navigation = useNavigation();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Best Buy",
      headerTransparent: false,

      headerLeft: () => (
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={"#000"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const scrollOffset = useScrollViewOffset(scrollRef);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        ref={scrollRef}
        scrollEventThrottle={16}>
        <Image source={listing?.image} style={styles.image} />

        <View style={styles.infoContainer}>
          <View
            style={{
              minWidth: "80%",
              flexDirection: "row",
              alignSelf: "flex-start",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={styles.name}>Best Buy Gift Card</Text>
            <View
              style={{
                backgroundColor: "#1868DF",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 14,
                borderRadius: 8,
              }}>
              <Text style={{ color: "#fff" }}>3.9% Rewards</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Best Buy gift cards make it easy to enjoy all the latest technology.
            Whether you're looking for smart home devices, drone, or 4K Ultra HD
            TVs, Associates will help you make the right choice. Plus, Geek
            Squad® can help keep it all running right with installation, setup,
            support and repair. Use Best Buy gift cards to get the tech you want
            and the services you need in stores and at BestBuy.com®
          </Text>
        </View>
      </Animated.ScrollView>

      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 20 }]}>
            <Text style={defaultStyles.btnText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: 157,
    width: width,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 18,

    fontFamily: "mon-sb",
  },
  location: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "mon-sb",
  },
  rooms: {
    fontSize: 16,
    color: Colors.grey,
    marginVertical: 4,
    fontFamily: "mon",
  },
  ratings: {
    fontSize: 16,
    fontFamily: "mon-sb",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
    marginVertical: 16,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  hostView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  footerText: {
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: "mon-sb",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primary,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  header: {
    backgroundColor: "#fff",
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
  },

  description: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: "mon-sb",
    lineHeight: 18,
    color: "#475569",
  },
});

export default DetailsPage;

import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const DetailsPage = () => {
  const navigation = useNavigation();
  const [purchaseAmount, setPurchaseAmount] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Best Buy",
      headerTransparent: false,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleInputChange = (text: string) => {
    setPurchaseAmount(text);
  };

  return (
    <KeyboardAvoidingView enabled style={styles.container}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dtovvjurl/image/upload/v1718763595/bestbuy_listing_didiac.png",
        }}
        style={styles.topImage}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.searchBarContainer}>
          <Ionicons
            name="logo-usd"
            size={16}
            color={Colors.inputText}
            style={styles.iconStyle}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={Colors.inputText}
            placeholder="140.00"
            value={purchaseAmount}
            onChangeText={handleInputChange}
          />
        </View>
        <TouchableOpacity style={[defaultStyles.btn, styles.buyButton]}>
          <Text style={defaultStyles.btnText}>Buy Now</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dtovvjurl/image/upload/v1718765304/bestbuy_terms_a6xiiw.png",
          }}
          style={styles.termsImage}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topImage: {
    width,
    height: height / 2,
  },
  bottomContainer: {
    height: height / 2,
    width: "90%",
  },
  searchBarContainer: {
    borderRadius: 8,
    backgroundColor: Colors.input,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 14,

    zIndex: 2,
  },
  iconStyle: {
    opacity: 0.7,
  },
  textInput: {
    fontFamily: "mon-sb",
    color: Colors.primary,
    fontSize: 16,
    flex: 1,
    opacity: 0.7,
  },
  buyButton: {
    alignSelf: "center",
    width: "100%",
    marginTop: 20,
  },
  termsImage: {
    width,
    height: 158,
    marginTop: 20,
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20, // Adjusted to 20 for a perfect circle
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primary,
  },
});

export default DetailsPage;

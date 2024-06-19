import useEmailAuth from "@/hooks/use-email-auth";
import UseGiftCard from "@/hooks/use-gift-card";
import useMerchants from "@/hooks/use-merchants";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import * as Linking from "expo-linking";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const MerchantPage = () => {
  const { merchants } = useMerchants();
  const { id } = useLocalSearchParams();
  const merchant = merchants.find(
    (merchant: any) => merchant.merchantId === id
  );
  const {
    isLoading,
    error,
    accessToken,
    verifyEmail,
    verifyToken,
    clearError,
  } = useEmailAuth();

  const {
    isLoadingGiftCard,
    errorGiftCard,
    paymentUrl,
    createGiftCard,
    clearErrorGiftCard,
  } = UseGiftCard();
  const [checkoutStatus, setCheckoutStatus] = useState("default");
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleRedirect = async () => {
    try {
      await Linking.openURL(paymentUrl);
    } catch (error) {
      console.error("Failed to open URL: ", error);
    }
  };

  const handleInputChange = (value: string) => {
    setEmail(value);
    clearError(); // Clear error when input changes
  };

  const handleSubmit = async () => {
    if (checkoutStatus === "default") {
      await verifyEmail(email);

      if (error === null) {
        setCheckoutStatus("valid_email");
      }
    }

    if (checkoutStatus === "valid_email") {
      await verifyToken(email, token);

      if (error === null) {
        setCheckoutStatus("valid_token");
      }
    }

    if (checkoutStatus === "valid_token") {
      const txData = {
        cryptoCurrency: "DASH",
        fiatCurrency: "USD",
        fiatAmount: purchaseAmount,
        merchantId: merchant?.merchantId,
      };

      await createGiftCard(txData, accessToken as string);

      setCheckoutStatus("default");

      if (paymentUrl) {
        await handleRedirect();
      }
    }
  };

  useEffect(() => {
    if (errorGiftCard !== null || error !== null) {
      setShowErrorToast(true);
    }
  }, [error, errorGiftCard]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
          source={{ uri: "/merchant_banner.png" }}
          style={styles.merchantImage}
        />
        <View style={styles.merchantDetails}>
          <Text style={styles.title}>
            {merchant?.name} Gift Card{" "}
            <Text style={styles.rewardsBadge}>
              {merchant?.info?.savingsPercentage}% Rewards
            </Text>
          </Text>
          <Text style={styles.description}>
            {`Best Buy gift cards make it easy to enjoy all the latest technology.
            Whether you're looking for smart home devices, drone, or 4K Ultra HD
            TVs, Associates will help you make the right choice. Plus, Geek
            Squad® can help keep it all running right with installation, setup,
            support and repair.
            Use Best Buy gift cards to get the tech you want and the
            services you need in stores and at BestBuy.com®`}
          </Text>
          <View style={styles.availability}>
            <Text>✓ Online</Text>
            <Text>✓ In Store</Text>
          </View>
          <View style={styles.purchaseSection}>
            <Text style={styles.label}>Purchase Amount</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(value) => setPurchaseAmount(parseFloat(value))}
            />
            <TouchableOpacity
              style={styles.button}
              disabled={purchaseAmount <= 0}
              onPress={() => setCheckoutStatus("default")}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
            {checkoutStatus !== "default" && (
              <View style={styles.dialog}>
                <Text style={styles.dialogTitle}>Checkout</Text>
                <Text style={styles.dialogDescription}>
                  {checkoutStatus === "default" &&
                    `Please confirm your email address.`}
                  {checkoutStatus === "valid_email" &&
                    `Enter the OTP sent to your email address`}
                  {checkoutStatus === "valid_token" &&
                    `Please confirm the purchase details below`}
                </Text>
                <View style={styles.dialogContent}>
                  {checkoutStatus === "default" && (
                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>Email</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="michaelscott@gmail.com"
                        onChangeText={handleInputChange}
                      />
                    </View>
                  )}
                  {checkoutStatus === "valid_email" && (
                    <TextInput
                      style={styles.input}
                      placeholder="Enter OTP"
                      maxLength={4}
                      onChangeText={(value) => setToken(value)}
                    />
                  )}
                  {checkoutStatus === "valid_token" && (
                    <View>
                      <Text>
                        <Text style={styles.bold}>Purchase Item:</Text>{" "}
                        {`${merchant?.name} Gift Card`}
                      </Text>
                      <Text>
                        <Text style={styles.bold}>Purchase Amount:</Text>{" "}
                        {`$${purchaseAmount}.00`}
                      </Text>
                    </View>
                  )}
                </View>
                <Button
                  title="Confirm"
                  onPress={handleSubmit}
                  disabled={isLoading}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      {showErrorToast && (
        <View style={styles.container}>
          <BottomSheetModal children={<Text> {error}</Text>} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  listcontainer: {
    padding: 16,
  },
  merchantContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  merchantName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 16,
  },
  merchantImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  merchantDetails: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rewardsBadge: {
    backgroundColor: "#FFD700",
    padding: 4,
    borderRadius: 4,
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  availability: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  purchaseSection: {
    marginVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dialog: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dialogDescription: {
    fontSize: 16,
    marginVertical: 8,
  },
  dialogContent: {
    marginVertical: 8,
  },
  inputGroup: {
    marginVertical: 8,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default MerchantPage;

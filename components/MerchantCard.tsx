import useEmailAuth from "@/hooks/use-email-auth";
import UseGiftCard from "@/hooks/use-gift-card";
import useMerchants from "@/hooks/use-merchants";
import { Redirect, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MerchantPage() {
  const { merchants } = useMerchants();
  const { id } = useLocalSearchParams();

  const merchant = merchants.find(
    (merchant: any) => merchant.merchantId === id
  );

  const [checkoutStatus, setCheckoutStatus] = useState<
    "default" | "valid_email" | "valid_token"
  >("default");

  const [purchaseAmount, setPurchaseAmount] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const {
    isLoading,
    error,
    accessToken,
    refreshToken,
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

  const handleInputChange = (value: string) => {
    setEmail(value);
    clearError(); // Clear error when input changes
  };

  const handleSubmit = async () => {
    if (checkoutStatus === "default") {
      await verifyEmail(email as string);

      if (error === null) {
        setCheckoutStatus("valid_email");
      }
    }

    if (checkoutStatus === "valid_email") {
      await verifyToken(email as string, token as string);

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

      setOpen(false);
      setCheckoutStatus("default");

      if (paymentUrl) {
        // Use Expo Router to redirect
        Redirect({ href: paymentUrl });
      }
    }
  };

  useEffect(() => {
    if (errorGiftCard !== null || error !== null) {
      setShowErrorToast(true);
    }
  }, [error, errorGiftCard]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Open Checkout" onPress={() => setOpen(true)} />

      <Modal visible={open} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}>
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
            }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Checkout</Text>
            <Text style={{ marginBottom: 10 }}>
              {checkoutStatus === "default" &&
                `Please confirm your email address.`}
              {checkoutStatus === "valid_email" &&
                `Enter the OTP sent to your email address`}
              {checkoutStatus === "valid_token" &&
                `Please confirm the purchase details below`}
            </Text>
            <View>
              {checkoutStatus === "default" && (
                <View style={{ marginBottom: 10 }}>
                  <Text>Email</Text>
                  <TextInput
                    placeholder="michaelscott@gmail.com"
                    onChangeText={handleInputChange}
                    style={{
                      borderWidth: 1,
                      borderColor: "#ccc",
                      padding: 8,
                      borderRadius: 5,
                    }}
                  />
                </View>
              )}
              {checkoutStatus === "valid_email" && (
                <View style={{ marginBottom: 10 }}>
                  <TextInput
                    maxLength={4}
                    onChangeText={(value) => setToken(value)}
                    style={{
                      borderWidth: 1,
                      borderColor: "#ccc",
                      padding: 8,
                      borderRadius: 5,
                    }}
                  />
                </View>
              )}
              {checkoutStatus === "valid_token" && (
                <View style={{ marginBottom: 10 }}>
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>Purchase Item:</Text>{" "}
                    {`${merchant?.name} Gift Card`}
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>Purchase Amount:</Text>{" "}
                    {`$${purchaseAmount}.00`}
                  </Text>
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={(purchaseAmount as number) <= 0}
              style={{
                backgroundColor: "#007bff",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
                marginTop: 10,
              }}>
              <Text style={{ color: "white" }}>
                {!isLoading ? "Confirm" : "Loading..."}
              </Text>
            </TouchableOpacity>
            <Button title="Close" onPress={() => setOpen(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

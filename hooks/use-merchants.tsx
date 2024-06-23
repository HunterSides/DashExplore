import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
const API_URL = process.env.EXPO_PUBLIC_CTX_API_URL as string;
const API_KEY = process.env.EXPO_PUBLIC_CTX_API_KEY as string;
const API_SECRET = process.env.EXPO_PUBLIC_CTX_API_SECRET as string;
const API_ACCESS_TOKEN = process.env.EXPO_PUBLIC_API_ACCESS_TOKEN as string;

const useMerchants = () => {
  const [merchants, setMerchants] = useState<any[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    // const cachedMerchantsFetchFromLocal = async () => {
    //   const cachedMerchants = await AsyncStorage.getItem("merchants");

    //   if (cachedMerchants) {
    //     setMerchants(JSON.parse(cachedMerchants));
    //     console.log("Cached merchamts:", !!cachedMerchants);
    //     console.log(cachedMerchants.length);
    //   }
    // };

    //cachedMerchantsFetchFromLocal();
    setIsloading(true);

    // Fetch data from the API endpoint
    fetch(`${API_URL}/merchants`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        "X-Api-Key": API_KEY,
        "X-Api-Secret": API_SECRET,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((responseData) => {
        const merchantsData = responseData?.result || [];
        // Ensure uniqueness by merchantId
        const uniqueMerchants = Array.from(
          new Map(
            merchantsData.map((merchant: any) => [
              merchant.merchantId,
              merchant,
            ])
          ).values()
        );

        // Fetch additional details for each merchant
        return Promise.all(
          uniqueMerchants.map((merchant: any) =>
            fetch(`${API_URL}/merchants/${merchant.merchantId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_ACCESS_TOKEN}`,
                "X-Api-Key": API_KEY,
                "X-Api-Secret": API_SECRET,
              },
            })
              .then((detailsResponse) => {
                if (!detailsResponse.ok) {
                  throw new Error(
                    `Failed to fetch details for merchant id: ${merchant.merchantId}`
                  );
                }
                return detailsResponse.json();
              })
              .then((merchantDetail) => ({
                ...merchant,
                brandLogo: null,
                info: {
                  minimumCardPurchase: merchantDetail.minimumCardPurchase,
                  maximumCardPurchase: merchantDetail.maximumCardPurchase,
                  savingsPercentage: merchantDetail.savingsPercentage ?? 0,
                },
              }))
              .catch((error) => {
                console.error(
                  `Error fetching details for merchant id: ${merchant.merchantId}`,
                  error
                );
                return merchant; // Return the original merchant data on error
              })
          )
        );
      })
      .then((merchantsWithDetails) => {
        // Store the data in state and cache
        setMerchants(merchantsWithDetails);
        AsyncStorage.setItem("merchants", JSON.stringify(merchantsWithDetails));
      })
      .catch((error) => {
        // Handle errors
        setError(error);
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  // Return the data, loading status, and error
  return { merchants, isLoading, error };
};

export default useMerchants;

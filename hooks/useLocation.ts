// useLocation.js
import * as Location from "expo-location";
import { useCallback, useEffect, useMemo, useState } from "react";
export const localData = (data: any[]) => {
  const { location } = useLocation();

  const localListingsFromUserDynamicLocationObject = useCallback(
    () => [...data],
    [location]
  );

  const localItems = useMemo(() => data, []);

  return {
    localListingsFromUserDynamicLocationObject,
    localItems,
  };
};
const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  return { location, errorMsg };
};

export default useLocation;

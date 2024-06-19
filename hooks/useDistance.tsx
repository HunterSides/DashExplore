import { merchants as data } from "@/assets/data/categories";
import { useCallback, useMemo } from "react";
import distance from "../utils/calcDistance";
const useDistance = (lat1: number, lon1: number) => {
  const localListingsFromUserDynamicLocationObject = useCallback(
    () => [...data],
    []
  );
  const dataFromDynamicLocation = useMemo(() => [...data], []);
  const localitems = useMemo(() => data, []);

  const calculateDistance = (lat2: number, lon2: number) => {
    return distance(lat1, lon1, lat2, lon2);
  };

  return {
    localListingsFromUserDynamicLocationObject,
    dataFromDynamicLocation,
    localitems,
    calculateDistance,
  };
};

export default useDistance;

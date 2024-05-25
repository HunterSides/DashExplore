import { useCallback, useMemo } from 'react';
import useLocation from './useLocation';

const useLocalData = (data: any[]) => {
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

export default useLocalData;

const toRadians = (degree: number): number => {
  return degree * (Math.PI / 180);
};

const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: 'km' | 'm' | 'mi' | 'ft' = 'km' // Default unit is kilometers
): number => {
  const earthRadius = {
    km: 6371,      // Earth's radius in kilometers
    m: 6371e3,     // Earth's radius in meters
    mi: 3958.8,    // Earth's radius in miles
    ft: 3958.8 * 5280 // Earth's radius in feet (1 mile = 5280 feet)
  };

  const R = earthRadius[unit]; // Get the radius in the chosen unit
  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};


export default calculateDistance;
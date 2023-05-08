export function getLocation(setLocation) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLocation({
          latitude,
          longitude,
          address: data.display_name,
        });
      } catch (error) {
        setLocation({ error: error.message });
      }
    });
  } else {
    setLocation({
      error: "Geolocation is not supported by this browser.",
    });
  }
}

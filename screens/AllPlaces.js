import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/places/PlacesList";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currPlaces) => [...currPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;

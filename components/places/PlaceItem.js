import { View, Text, Pressable, Image } from "react-native";
import { Colors } from "../../constants/colors";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imagaeUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

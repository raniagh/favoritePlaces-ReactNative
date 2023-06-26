import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function OutlineButton({ onPress, color, size, children }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
      <Text>{children}</Text>
    </Pressable>
  );
}

export default OutlineButton;

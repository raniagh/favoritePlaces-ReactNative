import { Button, View } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";

function ImagePicker() {
  async function takeImageHandler() {
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
  }
  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

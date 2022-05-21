import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";

const storage = new Storage({
  storageBackend: AsyncStorage,
});

export { storage };

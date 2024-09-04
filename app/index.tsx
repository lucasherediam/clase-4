import Tarjeta from "@/components/Tarjeta";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tarjeta nombre={'Tarjeta 1'} />
      <Tarjeta nombre={'Tarjeta 2'} />
      <Tarjeta nombre={'Tarjeta 3'} />
    </View>
  );
}

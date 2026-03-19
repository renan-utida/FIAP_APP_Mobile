import { View, Text, Image } from "react-native";

export function LoginHeader() {
  return (
    <View className="bg-[#ED145B] items-center justify-center py-12 px-6">
      <Image
        source={require("../assets/logo-fiap.png")}
        style={{ width: 120, height: 48 }}
        resizeMode="contain"
      />
      <Text className="text-white text-sm font-semibold mt-4 opacity-90 tracking-widest uppercase">
        Portal do Aluno
      </Text>
    </View>
  );
}
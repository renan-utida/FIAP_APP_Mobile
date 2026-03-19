import { TouchableOpacity, Text } from "react-native";

interface LoginButtonProps {
  label?: string;
  onPress?: () => void;
}

export function LoginButton({ label = "Entrar", onPress }: LoginButtonProps) {
  return (
    <TouchableOpacity
      className="bg-[#ED145B] rounded-xl py-4 items-center mb-6"
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text className="text-white text-base font-bold tracking-wide">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
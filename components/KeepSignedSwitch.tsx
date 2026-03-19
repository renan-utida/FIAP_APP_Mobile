import { View, Text, Switch } from "react-native";

interface KeepSignedSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export function KeepSignedSwitch({ value, onValueChange }: KeepSignedSwitchProps) {
  return (
    <View className="flex-row items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 mb-8">
      <Text className="text-zinc-300 text-sm">Manter-me conectado</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#3f3f46", true: "#ED145B" }}
        thumbColor={value ? "#fff" : "#a1a1aa"}
      />
    </View>
  );
}
import { View, Text, TextInput, TouchableOpacity } from "react-native";

interface LoginInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "numeric" | "email-address";
  maxLength?: number;
  secureTextEntry?: boolean;
  showToggle?: boolean;
  toggleVisible?: boolean;
  onToggle?: () => void;
  rightLabel?: string;
  onRightLabelPress?: () => void;
}

export function LoginInput({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  maxLength,
  secureTextEntry = false,
  showToggle = false,
  toggleVisible = false,
  onToggle,
  rightLabel,
  onRightLabelPress,
}: LoginInputProps) {
  return (
    <View className="mb-6">
      {/* Label + link opcional à direita */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-zinc-300 text-sm font-semibold">{label}</Text>
        {rightLabel && (
          <TouchableOpacity onPress={onRightLabelPress}>
            <Text className="text-[#ED145B] text-xs font-semibold">
              {rightLabel}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Campo de input */}
      <View className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 flex-row items-center">
        <TextInput
          className="flex-1 text-white text-base py-4"
          placeholder={placeholder}
          placeholderTextColor="#52525b"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry && !toggleVisible}
        />
        {showToggle && (
          <TouchableOpacity onPress={onToggle}>
            <Text className="text-zinc-400 text-xs font-semibold">
              {toggleVisible ? "Ocultar" : "Ver"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
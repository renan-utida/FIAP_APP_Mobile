import "./styles/global.css";
import { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

import { LoginHeader } from "./components/LoginHeader";
import { LoginInput } from "./components/LoginInput";
import { KeepSignedSwitch } from "./components/KeepSignedSwitch";
import { LoginButton } from "./components/LoginButton";

function LoginScreen() {
  const insets = useSafeAreaInsets();
  const [rm, setRm] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSigned, setKeepSigned] = useState(false);

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-black"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" backgroundColor="#ED145B"/>

      {/* Barra de status */}
      <View className="bg-[#ED145B] w-full" style={{ height: insets.top }} />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <LoginHeader />

        {/* Formulário */}
        <View className="flex-1 px-6 pt-10 pb-8">

          {/* Título */}
          <Text className="text-white text-3xl font-bold mb-1">Bem-vindo</Text>
          <Text className="text-zinc-400 text-sm mb-8">
            Acesse com suas credenciais institucionais
          </Text>

          <LoginInput
            label="RM (Registro do Aluno)"
            placeholder="Ex: 555555"
            value={rm}
            onChangeText={setRm}
            keyboardType="numeric"
            maxLength={10}
          />

          <LoginInput
            label="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            showToggle
            toggleVisible={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            rightLabel="Esqueci minha senha"
          />

          <KeepSignedSwitch
            value={keepSigned}
            onValueChange={setKeepSigned}
          />

          <LoginButton />

          {/* Rodapé */}
          <Text className="text-zinc-600 text-xs text-center">
            Problemas com o acesso? Entre em contato com a{" "}
            <Text className="text-[#ED145B]">secretaria acadêmica</Text>.
          </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}
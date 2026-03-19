import "./styles/global.css"

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar style="light" />

      {/* Barra de status */}
      <View className="bg-[#ED145B] w-full" style={{ height: insets.top }} />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header vermelho com logo */}
        <View className="bg-[#ED145B] items-center justify-center py-12 px-6">
          <Image
            source={require("./assets/logo-fiap.png")}
            style={{ width: 120, height: 48 }}
            resizeMode="contain"
          />
          <Text className="text-white text-sm font-semibold mt-4 opacity-90 tracking-widest uppercase">
            Portal do Aluno
          </Text>
        </View>

        {/* Formulário */}
        <View className="flex-1 px-6 pt-10 pb-8">

          {/* Título */}
          <Text className="text-white text-3xl font-bold mb-1">Bem-vindo</Text>
          <Text className="text-zinc-400 text-sm mb-8">
            Acesse com suas credenciais institucionais
          </Text>

          {/* Campo RM */}
          <Text className="text-zinc-300 text-sm font-semibold mb-2">
            RM (Registro do Aluno)
          </Text>
          <TextInput
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white text-base mb-5"
            placeholder="Ex: 555555"
            placeholderTextColor="#52525b"
            value={rm}
            onChangeText={setRm}
            keyboardType="numeric"
            maxLength={10}
          />

          {/* Campo Senha */}
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-zinc-300 text-sm font-semibold">Senha</Text>
            <TouchableOpacity>
              <Text className="text-[#ED145B] text-xs font-semibold">
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </View>
          <View className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 flex-row items-center mb-6">
            <TextInput
              className="flex-1 text-white text-base py-4"
              placeholder="Digite sua senha"
              placeholderTextColor="#52525b"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text className="text-zinc-400 text-xs font-semibold">
                {showPassword ? "Ocultar" : "Ver"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Switch - Manter conectado */}
          <View className="flex-row items-center justify-between bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 mb-8">
            <Text className="text-zinc-300 text-sm">Manter-me conectado</Text>
            <Switch
              value={keepSigned}
              onValueChange={setKeepSigned}
              trackColor={{ false: "#3f3f46", true: "#ED145B" }}
              thumbColor={keepSigned ? "#fff" : "#a1a1aa"}
            />
          </View>

          {/* Botão Entrar */}
          <TouchableOpacity
            className="bg-[#ED145B] rounded-xl py-4 items-center mb-6"
            activeOpacity={0.85}
          >
            <Text className="text-white text-base font-bold tracking-wide">
              Entrar
            </Text>
          </TouchableOpacity>
 
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
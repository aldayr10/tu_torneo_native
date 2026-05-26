import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({
      email,
      password,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
        justifyContent: 'center',
        paddingHorizontal: 24,
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          fontWeight: '700',
          marginBottom: 8,
        }}
      >
        Tu Torneo
      </Text>

      <Text
        style={{
          color: '#94A3B8',
          fontSize: 16,
          marginBottom: 40,
        }}
      >
        Inicia sesión para continuar
      </Text>

      <View
        style={{
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: 'white',
            marginBottom: 8,
          }}
        >
          Correo electrónico
        </Text>

        <TextInput
          placeholder="correo@email.com"
          placeholderTextColor="#64748B"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: '#1E293B',
            color: 'white',
            paddingHorizontal: 16,
            paddingVertical: 14,
            borderRadius: 14,
            fontSize: 16,
          }}
        />
      </View>

      <View
        style={{
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: 'white',
            marginBottom: 8,
          }}
        >
          Contraseña
        </Text>

        <TextInput
          placeholder="********"
          placeholderTextColor="#64748B"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{
            backgroundColor: '#1E293B',
            color: 'white',
            paddingHorizontal: 16,
            paddingVertical: 14,
            borderRadius: 14,
            fontSize: 16,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => router.push('/(tabs)')}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#2563EB',
          paddingVertical: 16,
          borderRadius: 14,
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '700',
          }}
        >
          Iniciar Sesión
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/register')}
      >
        <Text
          style={{
            color: '#60A5FA',
            textAlign: 'center',
            fontSize: 15,
          }}
        >
          ¿No tienes cuenta? Regístrate
        </Text>
      </TouchableOpacity>
    </View>
  );
}
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useState } from 'react';

import { router } from 'expo-router';

import { useTeamStore } from '../../store/teamStore';

export default function CreateTeamScreen() {
  const { addTeam, teams } = useTeamStore();

  const [name, setName] = useState('');
  const [players, setPlayers] = useState('');

  const handlePlayersChange = (text: string) => {
    const onlyNumbers = text.replace(/[^0-9]/g, '');

    if (
      onlyNumbers !== '' &&
      Number(onlyNumbers) > 35
    ) {
      Alert.alert(
        'Límite excedido',
        'Un equipo puede tener máximo 35 jugadores.'
      );
      return;
    }

    setPlayers(onlyNumbers);
  };

  const handleCreateTeam = () => {
    if (!name.trim()) {
      Alert.alert(
        'Campo requerido',
        'Debes ingresar el nombre del equipo.'
      );
      return;
    }

    if (!players) {
      Alert.alert(
        'Campo requerido',
        'Debes ingresar la cantidad de jugadores.'
      );
      return;
    }

    const totalPlayers = Number(players);

    if (totalPlayers < 1) {
      Alert.alert(
        'Cantidad inválida',
        'Debe existir al menos 1 jugador.'
      );
      return;
    }

    if (totalPlayers > 35) {
      Alert.alert(
        'Cantidad inválida',
        'Máximo 35 jugadores por equipo.'
      );
      return;
    }

    addTeam({
      id: teams.length + 1,
      name,
      players: totalPlayers,
    });

    Alert.alert(
      'Éxito',
      'Equipo creado correctamente.'
    );

    router.back();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0F172A',
        padding: 24,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          fontWeight: '700',
          marginBottom: 10,
        }}
      >
        Crear Equipo
      </Text>

      <Text
        style={{
          color: '#94A3B8',
          marginBottom: 40,
          fontSize: 16,
        }}
      >
        Agrega un nuevo equipo
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
          Nombre del equipo
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Ej: Titanes FC"
          placeholderTextColor="#64748B"
          style={{
            backgroundColor: '#1E293B',
            color: 'white',
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderRadius: 16,
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
          Cantidad jugadores
        </Text>

        <TextInput
          value={players}
          onChangeText={handlePlayersChange}
          keyboardType="numeric"
          placeholder="Ej: 12"
          placeholderTextColor="#64748B"
          style={{
            backgroundColor: '#1E293B',
            color: 'white',
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderRadius: 16,
            fontSize: 16,
          }}
        />

        <Text
          style={{
            color: '#94A3B8',
            marginTop: 8,
            fontSize: 12,
          }}
        >
          Solo números. Máximo 35 jugadores.
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleCreateTeam}
        style={{
          backgroundColor: '#2563EB',
          paddingVertical: 18,
          borderRadius: 18,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '700',
          }}
        >
          Guardar Equipo
        </Text>
      </TouchableOpacity>
    </View>
  );
}